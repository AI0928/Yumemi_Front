'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { PREF } from '@/types/PREF';

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<PREF[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const URL =
        'https://opendata.resas-portal.go.jp/api/v1/prefectures';
      const response = await axios.get(URL, {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      setPrefectures(response.data['result']);
    };
    fetchData();
  }, []);

  return prefectures;
};
