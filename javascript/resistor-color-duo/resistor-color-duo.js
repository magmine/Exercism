export const decodedValue = (colors) => {
  var result_string = ""
  for (let idx = 0; idx < Math.min(2, colors.length); idx++) {
    result_string = result_string + COLORS.indexOf(colors[idx]);
  }
  return Number(result_string)
};


const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];