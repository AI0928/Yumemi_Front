import React from 'react';
import { type Dispatch } from 'react';
import styles from '@/features/RadioButton/RadioButton.module.css';
const items = [
  {
    id: 'totalPopulation',
    value: '総人口',
    label: '総人口',
  },
  {
    id: 'youngPopulation',
    value: '年少人口',
    label: '年少人口',
  },
  {
    id: 'workingAgePopulation',
    value: '生産年齢人口',
    label: '生産年齢人口',
  },
  {
    id: 'geriatricPopulation',
    value: '老年人口',
    label: '老年人口',
  },
];

type Props = {
  selected: string;
  setSelected: Dispatch<React.SetStateAction<string>>;
};

const RadioButton = (props: Props) => {
  /** 選択中のラジオボタンvalue */
  const setSelected = props.setSelected;
  const selected = props.selected;
  /** ラジオボタン切り替えイベント */
  const changeValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setSelected(event.target.value);
  return (
    <div className={styles.container}>
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
