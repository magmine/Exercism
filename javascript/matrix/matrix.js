//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(text) {
    this.text = text;
  }

  get rows() {
    const ch = "";
    const lines = this.text.split('\n');
    rows = [];
    for (let i, line of lines) {
      rows[i] = line.split(' ');
    }
    return rows;
  }

  get columns() {
    const cols = [];
    const rows = this.rows();
    cols
    rows.for_each((row, i) => {
      row[i].for_each((el, j) => {

      })
    })
    for (let i, row of rows) {
      //let col = [];
      for (let j, el of row) {
        cols[j][i] = el;
      }
      //cols.push(col);
    }
    return cols;
  }
}
