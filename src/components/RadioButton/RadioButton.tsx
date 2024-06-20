'use client';
import { useState } from 'react';
import React from 'react';

const items = [
  {
    id: 'totalPopulation',
    value: 0,
    label: '総人口',
  },
  {
    id: 'youngPopulation',
    value: 1,
    label: '年少人口',
  },
  {
    id: 'workingAgePopulation',
    value: 2,
    label: '生産年齢人口',
  },
  {
    id: 'geriatricPopulation',
    value: 3,
    label: '老年人口',
  },
];

const RadioButton = () => {
  /** 選択中のラジオボタンvalue */
  const [selected, setSelected] = useState<number>(0);
  /** ラジオボタン切り替えイベント */
  const changeValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setSelected(parseInt(event.target.value));
  return (
    <div>
      <div>{selected}</div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <input
              type="radio"
              id={item.id}
              value={item.value}
              checked={item.value === selected}
              onChange={changeValue}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButton;
