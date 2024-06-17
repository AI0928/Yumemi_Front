// イベントリスナーの処理を関数化
'use client';
import React from 'react';
import { type Dispatch, useEffect } from 'react';
import { PREF } from '@/types/PREF';
type Props = {
  pref: PREF;
  setCheckCodes: Dispatch<React.SetStateAction<string[]>>;
};
export function GetChecked(props: Props) {
  // 選択されたチェックボックスのidを保持するstate

  useEffect(() => {
    const checkbox = document.getElementById(
      props.pref.prefCode
    ) as HTMLInputElement;

    function handleChange() {
      // if (checkbox.checked) {
      //   console.log(checkbox);
      // }

      props.setCheckCodes((prev) => {
        if (prev.includes(props.pref.prefCode)) {
          // すでに選択されている場合は削除
          return prev.filter(
            (i) => i !== props.pref.prefCode
          );
        } else {
          // 選択されていない場合は追加
          return [...prev, props.pref.prefCode];
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
