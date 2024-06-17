import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '都道府県別の総人口推移グラフ',
  description:
    'RESAS(地域経済分析システム) APIから取得したデータをもとに、都道府県の人口構成グラフを表示します。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
