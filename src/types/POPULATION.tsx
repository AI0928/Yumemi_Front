type BASE_DATA = {
  year: number;
  value: number;
};

type RATE_DATA = BASE_DATA & {
  rate: number;
};

export type POPULATION = {
  prefCode: string;
  prefName: string;
  boundaryYear: string;
  data: Array<{
    label: string;
    data: Array<BASE_DATA | RATE_DATA>;
  }>;
};
