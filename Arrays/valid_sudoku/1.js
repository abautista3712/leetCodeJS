/**
 * @param {character[][]} board
 * @return {boolean}
 */

const board = [
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let hash_row = [];
    let hash_column = [];
    let hash_sub_box = [];

    for (let j = 0; j < 9; j++) {
      // // Check Row
      if (board[i][j] != ".") {
        let number = parseInt(board[i][j] - 1);
        if (hash_row[number]) {
          console.log(`Invalid Row: ${i}, ${j}`);
          return false;
        }
        hash_row[number] = number + 1;
      }

      // // Check Column
      if (board[j][i] != ".") {
        let number = parseInt(board[j][i] - 1);
        if (hash_column[number]) {
          console.log(`Invalid Column: ${j}, ${i}`);
          return false;
        }
        hash_column[number] = number + 1;
      }

      // Check Sub-Box
      let m = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      let n = ((i * 3) % 9) + (j % 3);

      if (board[m][n] != ".") {
        let number = parseInt(board[m][n] - 1);
        if (hash_sub_box[number]) {
          console.log(`Invalid Sub-Box: ${m}, ${n}`);
          return false;
        }
        hash_sub_box[number] = number + 1;
      }
    }
    console.log(`Valid Row, Column, Sub-Box: ${i}`);
  }
  console.log("---Valid Sudoku---");
  return true;
};

isValidSudoku(board);
