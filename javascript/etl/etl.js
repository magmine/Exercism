//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  const newT = {};

  for (let key in old) {
    const chars = old[key];
    chars.map((value) => {
      newT[value] = key;
    })
  }

  const keys = Object.keys(newT).sort();

  const result = {};

  for (let key of keys) {
    result[key.toLowerCase()] = Number(newT[key]);
  }
  return result;
};
