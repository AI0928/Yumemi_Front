import Population from '@/types/Population';
import CheckCode from '@/types/CheckCode';

const filteredPopulations = (
  checkCodes: CheckCode[],
  populations: Population[]
): Population[] => {
  const filteredPopulations = populations.filter(
    (population) =>
      checkCodes.some(
        (checkCode) =>
          checkCode.prefCode === population.prefCode
      )
  );
  return filteredPopulations;
};

export default filteredPopulations;
