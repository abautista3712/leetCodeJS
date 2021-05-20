/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const n = 3;

var hammingWeight = function (n) {
  let result = n.toString(2);
  let count = result.split(1).length - 1;

  return count;
};

console.log(hammingWeight(n));
