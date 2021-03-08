//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dnaToRnaMap = {
  'G' : 'C',
  'C' : 'G',
  'T' : 'A',
  'A' : 'U',
};

// Method 2
export const toRna = (dna_string) => {
  const rnaNucleotides = dna_string.split('')
  return rnaNucleotides.map((nucleotide) => dnaToRnaMap[nucleotide]).join('')
}


// Method 1:
// export const toRna = (dna_string) => {
//   const rnaNucleotides = [];
//   for (let nucleotide of dna_string) {
//     rnaNucleotides.push(dnaToRnaMap[nucleotide]);
//   }
//   return rnaNucleotides.join('');
// };
