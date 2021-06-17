/**
 * @param {number} n
 * @return {boolean}
 */
const n = 0;
var isPowerOfThree = function (n) {
  if (Math.cbrt(n) % 3 > 0) {
    return false;
  } else {
    return true;
  }
};
console.log(isPowerOfThree(n));
