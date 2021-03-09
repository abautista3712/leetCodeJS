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
  // Create Hash Table
  let hash = [];
  for (let i = 0; i < 9; i++) {
    hash.push(0);
  }

  // Check Row
  for (let i = 0; i < 9; i++) {
    if (board[0][i] == ".") {
      i++;
    } else if (hash[parseInt([board[0][i]]) - 1] == 1) {
      return false;
    } else {
      hash[parseInt([board[0][i]]) - 1]++;
    }
  }

  console.log(hash);
};

isValidSudoku(board);
