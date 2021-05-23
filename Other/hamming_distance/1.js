/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const x = 1;
const y = 4;

var hammingDistance = function (x, y) {
  const bi_x_length = x.toString(2).length;
  const bi_y_length = y.toString(2).length;

  return bi_y_length - bi_x_length;
};

console.log(hammingDistance(x, y));
