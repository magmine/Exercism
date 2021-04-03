//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
 */

export const isLeap = (year) => {
  if (year % 100 === 0) {
    if (year % 4 === 0 && year % 400 === 0) return true;
    else return false;
  }
  if (year % 4 === 0) return true
  return false
};
