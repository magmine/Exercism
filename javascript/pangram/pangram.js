//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const alphabetOccurnaces = {};

export const isPangram = (text) => {
  //alphabet.map((char) => { alphabetOccurnaces[char] = 0 }); // Great way to create a dynamic map
  text = text.toLowerCase().replace(/[^a-z]/g, ''); // replace anything not a-z to empty
  return new Set(text).size === alphabet.length;
};
