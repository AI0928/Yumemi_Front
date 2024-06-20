'use client';
import { Title } from '@/components/Title/Title';
import OutPutCheckBoxes from '@/features/OutPutCheckBoxes';
import styles from '@/app/page.module.css';
import { useState } from 'react';
import Population from '@/features/Population';
import { CHECKCODE } from '@/types/CHECKCODE';
import RadioButton from '@/components/RadioButton/RadioButton';

export default function Home() {
  const [checkCodes, setCheckCodes] = useState<CHECKCODE[]>(
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
        <RadioButton
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div>
        <Population
          selected={selected}
          checkCodes={checkCodes}
        />
      </div>
    </main>
  );
}
