//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  for (let key of old) {
    chars = old[key]
    chars.map(())
  }
  old.map((val, i) => {
    console.log(val, i)
  });
};


const old = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};

const newT = {}

for (let key in old) {
  chars = old[key]
  chars.map((value) => {
    newT[value] = key
  })
}

keys = Object.keys(newT).sort()

const result = {}

for (let key of )

console.log(newT)