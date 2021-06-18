/**
 * @param {number} n
 * @return {boolean}
 */
const n = 2187;
var isPowerOfThree = function (n) {
  let mod_log3 = Math.log(n) % Math.log(3);

  if (n == 0) {
    return false;
  } else if (Math.abs(mod_log3) > 10 ** -14) {
    return false;
  } else {
    return true;
  }
};
console.log(isPowerOfThree(n));
