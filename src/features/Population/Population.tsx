'use client';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Population from '@/types/Population';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import CheckCode from '@/types/CheckCode';
import styles from '@/features/Population/Population.module.css';
import filteredPopulations from './filteredPopulations';
import transformData from './transformData';
import isPrefCodeExist from './isPrefCodeExist';
import TransformedData from '@/types/TransformData';

type Props = {
  selected: string;
  checkCodes: CheckCode[];
};

const PopulationChart = (props: Props) => {
  const checkCodes = props.checkCodes;
  const selected = props.selected;
  const [populations, setPopulation] = useState<
    Population[]
  >([]);

  const [lines, setLines] = useState<React.ReactNode[]>([]);
  const [chart_data, setChart_data] = useState<
    TransformedData[]
  >([]);
  const [isMobile, setIsMobile] = useState<Boolean>();
  useEffect(() => {
    const fetchData = async (checkCode: CheckCode) => {
      const URL =
        'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=' +
        checkCode.prefCode;
      const response = await axios // axiosモジュールを使う
        .get(URL, {
          headers: {
            'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
          },
        });

      const result = response.data['result'];
      const add_data = {
        prefCode: checkCode.prefCode,
        prefName: checkCode.prefName,
        boundaryYear: result.boundaryYear,
        data: result.data,
      };
      if (typeof populations !== 'undefined') {
        setPopulation([...populations, add_data]);
      } else {
        setPopulation([add_data]);
      }
    };

    if (checkCodes.length !== 0) {
      for (const code of checkCodes) {
        if (typeof populations !== 'undefined') {
          const exists = isPrefCodeExist(
            populations,
            code.prefCode
          );
          if (exists) {
            fetchData(code);
          }
        } else {
          fetchData(code);
        }
      }
    }

    if (typeof populations !== 'undefined') {
      setPopulation(
        filteredPopulations(checkCodes, populations)
      );
    }
    // console.log(populations);
  }, [checkCodes]);

  useEffect(() => {
    if (populations.length !== 0) {
      const data: TransformedData[] = transformData(
        populations,
        selected
      );
      setChart_data(data);
      if (data.length !== 0) {
        // ラインのキー
        const keys = Object.keys(data[0]).filter(
          (key) => key !== 'year'
        );
        const colors = keys.map((key, index) => {
          const hue = (360 / keys.length) * index;
          return `hsl(${hue}, 70%, 50%)`;
        });
        // mapを使用してLineコンポーネントのリストを作成
        const newLines = keys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[index]}
          />
        ));
        setLines(newLines);
      }
    }
  }, [populations, selected]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 600);
  }, []);

  const formatTickItem = (value: string | number) => {
    if (typeof value === 'string') {
      value = parseInt(value);
    }

    if (isMobile) {
      return value >= 1000
        ? `${value / 1000}K`
        : value.toString();
    } else {
      return value.toString();
    }
  };
  if (populations.length !== 0) {
    return (
      <div className={styles.container}>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={chart_data}
              margin={{
                top: 50,
                right: 60,
                left: 50,
                bottom: 50,
              }}
            >
              <CartesianGrid stroke="#ccc" />
              <XAxis
                dataKey="year"
                label={{
                  value: '年度',
                  position: 'insideRight',
                  offset: -55,
                }}
                interval={isMobile ? 3 : 0} // モバイル表示では5つおきに表示
                angle={-30}
                dx={-10}
                dy={5}
              />
              <YAxis
                label={{
                  value: '人口',
                  position: 'insideTop',
                  offset: -40,
                }}
                tickFormatter={formatTickItem}
              />
              {lines}
              <Legend />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
};

export default PopulationChart;
