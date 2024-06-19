'use client';
import { Title } from '@/components/Title/Title';
import OutPutCheckBoxes from '@/features/OutPutCheckBoxes';
import styles from '@/app/page.module.css';
import { useState } from 'react';
import Population from '@/features/Population';
import { CHECKCODE } from '@/types/CHECKCODE';

export default function Home() {
  // const [checkCodes, setCheckCodes] = useState<string[]>(
  //   []
  // );
  const [checkCodes2, setCheckCodes2] = useState<
    CHECKCODE[]
  >([]);
  console.log(checkCodes2);

  return (
    <main className={styles.main}>
      <div>
        <Title title="都道府県" />
      </div>
      <div>
        <OutPutCheckBoxes setCheckCodes={setCheckCodes2} />
      </div>
      <div>
        <Population checkCodes={checkCodes2} />
      </div>
    </main>
  );
}
