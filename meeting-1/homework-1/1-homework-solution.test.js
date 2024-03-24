const { getTable } = require("./1-homework-solution");

test("getTable should return a table with the specified number of rows and columns", () => {
  const numRows = 4;
  const numCols = 5;
  const expectedTable = [
    [1, 8, 9, 16, 17],
    [2, 7, 10, 15, 18],
    [3, 6, 11, 14, 19],
    [4, 5, 12, 13, 20],
  ];

  expect(getTable(numRows, numCols)).toEqual(expectedTable);
});

test("getTable should return a table with alternating patterns when rows and columns are 6", () => {
  const numRows = 6;
  const numCols = 6;
  const expectedTable = [
    [1, 12, 13, 24, 25, 36],
    [2, 11, 14, 23, 26, 35],
    [3, 10, 15, 22, 27, 34],
    [4, 9, 16, 21, 28, 33],
    [5, 8, 17, 20, 29, 32],
    [6, 7, 18, 19, 30, 31],
  ];

  expect(getTable(numRows, numCols)).toEqual(expectedTable);
});

test("getTable should return a table with alternating patterns when rows and columns are 3", () => {
  const numRows = 3;
  const numCols = 3;
  const expectedTable = [
    [1, 6, 7],
    [2, 5, 8],
    [3, 4, 9],
  ];

  expect(getTable(numRows, numCols)).toEqual(expectedTable);
});
