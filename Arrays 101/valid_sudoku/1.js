/**
 * @param {character[][]} board
 * @return {boolean}
 */

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var isValidSudoku = function (board) {
  let hash = [];

  // Check Rows
  for (let i = 0; i < 9; i++) {
    // Reset Hash Table
    for (let j = 0; j < 9; j++) {
      if (hash.length === 0) {
        hash.push(0);
      } else {
        hash[j] = 0;
      }
    }

    for (let k = 0; k < 9; k++) {
      if (board[i][k] != ".") {
        if (hash[parseInt([board[i][k]]) - 1] == 1) {
          return false;
        } else {
          hash[parseInt([board[i][k]]) - 1]++;
        }
      }
    }
  }

  // Check Columns
  for (let i = 0; i < 9; i++) {
    // Reset Hash Table
    for (let j = 0; j < 9; j++) {
      if (hash.length === 0) {
        hash.push(0);
      } else {
        hash[j] = 0;
      }
    }

    for (let k = 0; k < 9; k++) {
      if (board[k][i] != ".") {
        if (hash[parseInt([board[k][i]]) - 1] == 1) {
          return false;
        } else {
          hash[parseInt([board[k][i]]) - 1]++;
        }
      }
    }
    console.log(hash);
  }
};

isValidSudoku(board);
