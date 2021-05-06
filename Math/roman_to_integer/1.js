/**
 * @param {number} n
 * @return {boolean}
 */
const n = 45;
var isPowerOfThree = function (n) {
  function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }

  return getBaseLog(3, n);
};
console.log(isPowerOfThree(n));
