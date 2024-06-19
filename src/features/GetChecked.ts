// イベントリスナーの処理を関数化
'use client';
import React from 'react';
import { type Dispatch, useEffect } from 'react';
import { PREF } from '@/types/PREF';
import { CHECKCODE } from '@/types/CHECKCODE';

type Props = {
  pref: PREF;
  // setCheckCodes: Dispatch<React.SetStateAction<string[]>>;
  setCheckCodes: Dispatch<
    React.SetStateAction<CHECKCODE[]>
  >;
};
export function GetChecked(props: Props) {
  // 選択されたチェックボックスのidを保持するstate

  useEffect(() => {
    const checkbox = document.getElementById(
      props.pref.prefCode
    ) as HTMLInputElement;

    function handleChange() {
      //   props.setCheckCodes((prev) => {
      //     if (prev.includes(props.pref.prefCode)) {
      //       // すでに選択されている場合は削除
      //       return prev.filter(
      //         (i) => i !== props.pref.prefCode
      //       );
      //     } else {
      //       // 選択されていない場合は追加
      //       return [...prev, props.pref.prefCode];
      //     }
      //   });
      props.setCheckCodes((prev) => {
        const existingIndex = prev.findIndex(
          (i) => i.prefCode === props.pref.prefCode
        );

        if (existingIndex !== -1) {
          // すでに選択されている場合は削除
          return prev.filter(
            (i) => i.prefCode !== props.pref.prefCode
          );
        } else {
          // 選択されていない場合は追加
          return [
            ...prev,
            {
              prefCode: props.pref.prefCode,
              prefName: props.pref.prefName,
            },
          ];
        }
      });
    }

    checkbox.addEventListener('change', handleChange);

    // クリーンアップ関数を返す
    return () => {
      checkbox.removeEventListener('change', handleChange);
    };
  }, []);
}
