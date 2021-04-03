//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  let step_count = 0;
  if (num < 1) {
    throw new Error('Only positive numbers are allowed');
  }
  let n = num;
  while (n != 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (3 * n) + 1;
    }
    step_count++;
  }
  return step_count;
};
