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
  // Row 1:
  // 0,0 <-> 0, matrix[0].length
  // matrix.length, matrix.length.length <-> 0,0

  // 0,0   0,1   0,2

  // 1,0   1,1   1,2

  // 2,0   2,1   2,2

  // 1,2,3       7,4,1
  // 4,5,6  ->   8,5,2
  // 7,8,9       9,6,3

  // 1,2,3       3,2,1
  // 4,5,6  ->   6,5,4  ->
  // 7,8,9       9,8,7

  let n = matrix[0].length;

  for (let i = 0; i < n; i++) {
    let min_index = 0;
    let max_index = n - 1;
    let tmp = 0;
    while (min_index < max_index) {
      tmp = matrix[i][min_index];
      matrix[i][min_index] = matrix[i][max_index];
      matrix[i][max_index] = tmp;

      min_index++;
      max_index--;
    }
  }

  console.log(matrix);

  // matrix[0][0] = matrix[2][2]
  // matrix[2][2] = matrix[2][0]
};

console.log(rotate(matrix));
