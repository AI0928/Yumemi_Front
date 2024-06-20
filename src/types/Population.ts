type BaseData = {
  year: number;
  value: number;
};

type RateDate = BaseData & {
  rate: number;
};

type Population = {
  prefCode: string;
  prefName: string;
  boundaryYear: string;
  data: Array<{
    label: string;
    data: Array<BaseData | RateDate>;
  }>;
};

export default Population;
