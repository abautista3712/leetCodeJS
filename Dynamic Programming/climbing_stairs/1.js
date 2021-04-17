/**
 * @param {number} n
 * @return {number}
 */

const n = 2;

var climbStairs = function (n) {
  // Permutation w/o repetition
  // (n!) / (n - r)!

  const factorial = (num) => {
    if (num == 0) {
      return 1;
    } else {
      let total = 1;
      while (num > 0) {
        total = total * num;
        num--;
      }
      // console.log(total);
      return total;
    }
  };
  factorial(4);
};

console.log(climbStairs(n));
