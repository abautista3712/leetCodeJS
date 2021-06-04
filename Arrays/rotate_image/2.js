/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var rotate = function (matrix) {
  //  Transpose diagonally
  // [1,2,3]    [1,4,7]
  // [4,5,6] -> [2,5,8]
  // [7,8,9]    [3,6,9]

  // (matrix[0][0]) <-> (matrix[0][0]);
  // (matrix[0][1]) <-> (matrix[1][0]);
  // (matrix[0][2]) <-> (matrix[2][0]);

  // (matrix[1][1]) <-> (matrix[1][1]);
  // (matrix[1][2]) <-> (matrix[2][1]);

  // (matrix[2][2]) <-> (matrix[2][2]);

  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  console.log(matrix);

  //  Reverse left and right
  // [1,4,7]      [7,4,1]
  // [2,5,8]  ->  [8,5,2]
  // [3,6,9]      [9,6,3]

  // (matrix[0][0]) <-> (matrix[0][2]);
  // (matrix[0][1]) <-> (matrix[0][1]);

  // (matrix[1][0]) <-> (matrix[1][2]);
  // (matrix[1][1]) <-> (matrix[1][1]);

  // (matrix[2][0]) <-> (matrix[2][2]);
  // (matrix[2][1]) <-> (matrix[2][1]);
};

console.log(rotate(matrix));
