/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const x = 3;
const y = 1;

var hammingDistance = function (x, y) {
  const bi_x_length = x.toString(2).length;
  const bi_y_length = y.toString(2).length;

  return Math.abs(bi_x_length - bi_y_length);
};

console.log(hammingDistance(x, y));
