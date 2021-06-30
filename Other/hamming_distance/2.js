/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const x = 3;
const y = 1;

var hammingDistance = function (x, y) {
  let bit_x = x.toString(2);
  let bit_y = y.toString(2);

  let combined_int = parseInt(bit_x) + parseInt(bit_y);

  let count = 0;
  while (combined_int >= 1) {
    if (combined_int % 10 == 1) {
      count++;
    }
    combined_int = Math.floor(combined_int / 10);
  }
  return count;
};

console.log(hammingDistance(x, y));
