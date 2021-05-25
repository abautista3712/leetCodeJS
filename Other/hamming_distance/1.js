/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const x = 93;
const y = 73;

var hammingDistance = function (x, y) {
  const bi_x = x.toString(2);
  const bi_y = y.toString(2);

  if (bi_x.length != bi_y.length) {
    return Math.abs(bi_x.length - bi_y.length);
  } else {
    console.log("bi_x.length != bi_y.length");
  }
  //   console.log(bi_x_length);
  //   console.log(bi_y_length);
};

console.log(hammingDistance(x, y));
