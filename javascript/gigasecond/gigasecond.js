//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const newDate_seconds = (date.getTime() / 1000) + 1e9;
  return new Date(newDate_seconds * 1000);
};
