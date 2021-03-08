//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export const isPangram = (text) => {
  const alphabetOccurnaces = {};
  alphabet.map((char) => { alphabetOccurnaces[char] = 0 }); // Great way to create a dynamic map
  text = text.toLowerCase().trim();
  // TODO: remove all non alphabetical characters from the text later on
  for (let char of text) {
    alphabetOccurnaces[char] = alphabetOccurnaces[char] + 1;
  }
  for (const char in alphabetOccurnaces) {
    if (alphabetOccurnaces[char] === 0) {
      return false;
    }
  }
  return true;
};
