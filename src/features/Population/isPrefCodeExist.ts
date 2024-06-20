import Population from '@/types/Population';

const isPrefCodeExist = (
  populations: Population[],
  code: string
): boolean => {
  return !populations.some(
    (population) => population.prefCode === code
  );
};

export default isPrefCodeExist;
