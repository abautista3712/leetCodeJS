/**
 * @param {number} n
 * @return {boolean}
 */
const n = 45;
var isPowerOfThree = function (n) {
  if (Math.log(n) % Math.log(3) > 0.00001) {
    return false;
  } else {
    return true;
  }
};
console.log(isPowerOfThree(n));
