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
    let n = bi_x.length;
    let is_binary_equal = true;
    let count = 0;

    for (let i = 0; i < n; i++) {
      if (bi_x[i] != bi_y[i]) {
        if (is_binary_equal == true) {
          is_binary_equal = false;
        } else {
          is_binary_equal = true;
        }
      }

      if (is_binary_equal == false) {
        count++;
      }
    }
    return count;
  }
};

console.log(hammingDistance(x, y));
