import Population from '@/types/Population';
import TransformedData from '@/types/TransformData';

function transformData(
  population: Population[],
  selected: string
): TransformedData[] {
  // Create a map to store the data
  let map: { [key: number]: TransformedData } = {};

  // Iterate over each population data
  population.forEach((pop) => {
    // Iterate over each data in the population data
    pop.data.forEach((data) => {
      // Iterate over each base data or rate data
      if (data.label === selected) {
        data.data.forEach((baseData) => {
          // If the year does not exist in the map, add it
          if (!map[baseData.year]) {
            map[baseData.year] = {
              year: baseData.year.toString(),
            };
          }

          // Add the population data to the map
          map[baseData.year][pop.prefName] = baseData.value;
        });
      }
    });
  });

  // Convert the map to an array
  let result = Object.values(map);
  return result;
}

export default transformData;
