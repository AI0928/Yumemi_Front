'use client';
import { POPULATION } from '@/types/POPULATION';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { CHECKCODE } from '@/types/CHECKCODE';

type Props = {
  // checkCodes: string[];
  checkCodes: CHECKCODE[];
};

const isPrefCodeExist = (
  populations: POPULATION[],
  code: string
): boolean => {
  return !populations.some(
    (population) => population.prefCode === code
  );
};

const filteredPopulations = (
  // checkCodes: string[],
  checkCodes: CHECKCODE[],
  populations: POPULATION[]
): POPULATION[] => {
  const filteredPopulations = populations.filter(
    (population) =>
      // checkCodes.includes(populations.prefCode)
      checkCodes.some(
        (checkCode) =>
          checkCode.prefCode === population.prefCode
      )
  );
  console.log(filteredPopulations);
  return filteredPopulations;
};

const Population = (props: Props) => {
  const checkCodes = props.checkCodes;
  const [populations, setPopulation] = useState<
    POPULATION[]
  >([]);

  useEffect(() => {
    const fetchData = async (checkCode: CHECKCODE) => {
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
          console.log(exists);
          if (exists) {
            fetchData(code);
            console.log('追加', code);
          } else {
            console.log('すでに存在しています。', code);
          }
        } else {
          fetchData(code);
          console.log('追加', code);
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

  if (populations.length !== 0) {
    return (
      <div>
        {populations.map((population, index) => (
          <div key={index}>
            <h2>
              {population.prefName} ({population.prefCode})
            </h2>
            <p>Boundary Year: {population.boundaryYear}</p>
            {population.data.map((dataItem, dataIndex) => (
              <div key={dataIndex}>
                <h3>{dataItem.label}</h3>
                {dataItem.data.map(
                  (baseData, baseDataIndex) => (
                    <div key={baseDataIndex}>
                      <p>Year: {baseData.year}</p>
                      <p>Value: {baseData.value}</p>
                      {'rate' in baseData && (
                        <p>Rate: {baseData.rate}</p>
                      )}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
};

export default Population;
