'use client';
import React from 'react';
import styles from '@/features/CheckBox/CheckBox.module.css';
import { GetChecked } from '@/features/CheckBox/GetChecked';
import Prefecture from '@/types/Prefecture';
import { type Dispatch } from 'react';
import { CHECKCODE } from '@/types/CHECKCODE';
type PrefProps = {
  pref: Prefecture;
  setCheckCodes: Dispatch<
    React.SetStateAction<CHECKCODE[]>
  >;
};

export function CheckBox(props: PrefProps) {
  GetChecked(props);
  const pref = props.pref;

  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        name="checkbox"
        id={pref.prefCode}
        value={pref.prefCode}
      />
      <label htmlFor={pref.prefCode}>{pref.prefName}</label>
    </div>
  );
}
