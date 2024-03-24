let row = 4;
let col = 5;

function create2DArray(numRows, numCols) {
  let arr = new Array(numRows);
  for (let i = 0; i < numRows; i++) {
    arr[i] = new Array(numCols);
  }
  return arr;
}

const getTable = (row, col) => {
  let table = create2DArray(row, col);
  let counter = 1;

  for (let i = 0; i < col; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < row; j++) {
        table[j][i] = counter;
        counter++;
      }
    } else {
      for (let j = row - 1; j >= 0; j--) {
        table[j][i] = counter;
        counter++;
      }
    }
  }

  return table;
};

console.log(getTable(row, col));

module.exports = { getTable };
