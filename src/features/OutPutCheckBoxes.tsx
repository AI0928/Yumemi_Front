'use client';
import React from 'react';
import { CheckBox } from '@/components/CheckBox/CheckBox';
import styles from '@/features/OutPutCheckBoxes.module.css';
import { PREF } from '@/types/PREF';
import axios from 'axios';
import { type Dispatch, useState, useEffect } from 'react';
import { CHECKCODE } from '@/types/CHECKCODE';

type Props = {
  // setCheckCodes: Dispatch<React.SetStateAction<string[]>>;
  setCheckCodes: Dispatch<
    React.SetStateAction<CHECKCODE[]>
  >;
};

const OutPutCheckBoxes = (props: Props) => {
  const [prefectures, setPrefectures] = useState<PREF[]>(
    []
  );

  const setCheckCodes = props.setCheckCodes;
  useEffect(() => {
    const fetchData = async () => {
      const URL =
        'https://opendata.resas-portal.go.jp/api/v1/prefectures';
      const response = await axios // axiosモジュールを使う
        .get(URL, {
          headers: {
            'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
          },
        });
      setPrefectures(response.data['result']);
    };
    fetchData();
  }, []);

  if (typeof prefectures !== 'undefined') {
    return (
      <div>
        <div className={styles.container}>
          {prefectures.map((area_data) => {
            return (
              <CheckBox
                key={area_data.prefCode}
                pref={area_data}
                setCheckCodes={setCheckCodes}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default OutPutCheckBoxes;
