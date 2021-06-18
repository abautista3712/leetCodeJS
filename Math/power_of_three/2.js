/**
 * @param {number} n
 * @return {boolean}
 */
const n = 27;
var isPowerOfThree = function (n) {
  return Math.log(n) / Math.log(3);
};
console.log(isPowerOfThree(n));
