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
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse(...matrix[i]);
  }

  return matrix;
};

console.log(rotate(matrix));
