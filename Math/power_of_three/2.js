/**
 * @param {number} n
 * @return {boolean}
 */
const n = 45;
var isPowerOfThree = function (n) {
  if (n == 0) {
    return false;
  } else if (n % 3 > 0) {
    return false;
  } else {
    return true;
  }
};
console.log(isPowerOfThree(n));
