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
  //  Reverse left and right
};

console.log(rotate(matrix));
