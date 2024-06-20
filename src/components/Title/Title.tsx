'use client';
import styles from '@/components/Title/Title.module.css';

export function Title({ title }: { title: string }) {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
    </div>
  );
}
