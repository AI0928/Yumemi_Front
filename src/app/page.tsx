'use client';
import { Title } from '@/components/Title/Title';
import OutPutCheckBoxes from '@/features/OutPutCheckBoxes/OutPutCheckBoxes';
import styles from '@/app/page.module.css';
import { useState } from 'react';
import PopulationChart from '@/features/Population/Population';
import CheckCode from '@/types/CheckCode';
import RadioButton from '@/features/RadioButton/RadioButton';

export default function Home() {
  const [checkCodes, setCheckCodes] = useState<CheckCode[]>(
    []
  );
  const [selected, setSelected] =
    useState<string>('総人口');
  return (
    <main className={styles.main}>
      <div>
        <Title title="都道府県" />
      </div>
      <div>
        <OutPutCheckBoxes setCheckCodes={setCheckCodes} />
      </div>
      <div>
        <Title title="人口構成" />
      </div>
      <div>
        <RadioButton
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div>
        <Title title="人口データ折れ線グラフ" />
      </div>
      <div>
        <PopulationChart
          selected={selected}
          checkCodes={checkCodes}
        />
      </div>
    </main>
  );
}
