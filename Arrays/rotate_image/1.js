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

  let min_index = 0;
  let max_index = n - 1;

  // Reverse values in each sub-array
  // for (let i = 0; i < n; i++) {
  //   while (min_index < max_index) {
  //     let tmp = matrix[i][min_index];
  //     matrix[i][min_index] = matrix[i][max_index];
  //     matrix[i][max_index] = tmp;

  //     min_index++;
  //     max_index--;
  //   }
  //   min_index = 0;
  //   max_index = n - 1;
  // }

  // for (let i = 0; i < 2; i++) {
  //   let tmp = matrix[min_index][0];
  //   matrix[min_index][0] = matrix[2][max_index];
  //   matrix[2][max_index] = tmp;

  //   min_index++;
  //   max_index--;
  // }

  // for (let i = 0; i < n; i++) {
  let i = 0;
  let j = 2;

  while (min_index < max_index) {
    let tmp = matrix[min_index][i];
    matrix[min_index][i] = matrix[j][max_index];
    matrix[j][max_index] = tmp;

    min_index++;
    max_index--;
    i++;
    j--;
  }
  min_index = 0;
  max_index = n - 1;
  // }

  console.log(matrix);

  // matrix[0][0] = matrix[2][2]
  // matrix[2][2] = matrix[2][0]
};

console.log(rotate(matrix));
