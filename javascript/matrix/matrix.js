//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(text) {
    this.matrix = []
    this.inverseMatrix = []
    const lines = text.split('\n');
    lines.forEach((line, lineIndex) => {
      this.matrix[lineIndex] = line.split(' ');
    });
    console.log(this.matrix)
  }

  get rows() {
    return this.matrix;
  }

  inverseMatrix = () => {
    this.inverseMatrix = this.matrix
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        this.inverseMatrix[j][i] = this.matrix[i][j];
      }
    }
  }

  get columns() {
    const cols = [];
    const rows = this.rows();
    rows.forEach((row, i) => {
      row[i].forEach((el, j) => {
        
      });
    });

    return cols;
  }
}
