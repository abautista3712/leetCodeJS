/**
 * @param {number} n
 * @return {boolean}
 */
const n = 177148;
var isPowerOfThree = function (n) {
  if (n == 0) {
    return false;
  } else if (Math.log(n) % Math.log(3) > 10 ** -15) {
    return false;
  } else {
    return true;
  }
};
console.log(isPowerOfThree(n));
