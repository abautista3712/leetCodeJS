/**
 * @param {number} n
 * @return {boolean}
 */
const n = -3;
var isPowerOfThree = function (n) {
  let mod_log3 = Math.log(n) % Math.log(3);

  if (n == 0) {
    return false;
  }

  if (n > 0) {
    if (mod_log3 > 10 ** -14) {
      return false;
    } else {
      return true;
    }
  }
};
console.log(isPowerOfThree(n));
