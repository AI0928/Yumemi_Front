'use client';
import { Title } from '@/components/Title/Title';
import OutPutCheckBoxes from '@/features/OutPutCheckBoxes';
import styles from '@/app/page.module.css';
import { useState } from 'react';

export default function Home() {
  const [checkCodes, setCheckCodes] = useState<string[]>(
    []
  );
  console.log(checkCodes);
  return (
    <main className={styles.main}>
      <div>
        <Title title="都道府県" />
      </div>
      <div>
        <OutPutCheckBoxes setCheckCodes={setCheckCodes} />
      </div>
    </main>
  );
}
