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
  for (let i = 0; i < 9; i++) {
    let hash_row = [];
    let hash_column = [];
    let hash_sub_box = [];

    for (let j = 0; j < 9; j++) {
      // // Check Row
      // if (board[i][j] != ".") {
      //   let number = parseInt(board[i][j] - 1);
      //   if (hash_row[number]) {
      //     return false;
      //   }
      //   hash_row[number] = number + 1;
      // }

      // // Check Column
      // if (board[j][i] != ".") {
      //   let number = parseInt(board[j][i] - 1);
      //   if (hash_column[number]) {
      //     return false;
      //   }
      //   hash_column[number] = number + 1;
      // }

      // Check Sub-Box
      let m = (i / 3) * 3 + j / 3;
      let n = (j / 3) * 3 + (j % 3);

      console.log(`i = ${i}`);
      console.log(m);
      console.log(n);

      // 0,0   0,1   0,2

      // 1,0   1,1   1,2

      // 2,0   2,1   2,2

      // console.log(board);

      // if (board[m][n] != ".") {
      //   let number = parseInt(board[m][n] - 1);
      //   if (hash_sub_box[number]) {
      //     return false;
      //   }
      //   hash_sub_box[number] = number + 1;
      // }
    }
    console.log(hash_row);
  }
};

isValidSudoku(board);
