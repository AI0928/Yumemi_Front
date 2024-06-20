'use client';
import React from 'react';
import { CheckBox } from '@/features/CheckBox/CheckBox';
import styles from '@/features/OutPutCheckBoxes/OutPutCheckBoxes.module.css';
import Prefecture from '@/types/Prefecture';
import { type Dispatch, useState, useEffect } from 'react';
import { CHECKCODE } from '@/types/CHECKCODE';
import { usePrefectures } from './OutPutCheckBoxes';

type Props = {
  setCheckCodes: Dispatch<
    React.SetStateAction<CHECKCODE[]>
  >;
};

const OutPutCheckBoxes = (props: Props) => {
  const prefectures: Prefecture[] = usePrefectures();
  const setCheckCodes = props.setCheckCodes;

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
