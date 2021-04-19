/**
 * @param {number} n
 * @return {number}
 */

const n = 4;

var climbStairs = function (n) {
  let a = 1,
    b = 0,
    tmp;

  while (n >= 0) {
    tmp = a;
    a = a + b;
    b = tmp;
    n--;
  }

  return b;
};

console.log(climbStairs(n));
