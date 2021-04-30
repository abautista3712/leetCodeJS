/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [2, 7, 9, 3, 1];

var rob = function (nums) {
  let odds = 0;
  let evens = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      odds += nums[i];
    } else {
      evens += nums[i];
    }
  }
  return Math.max(evens, odds);
};

console.log(rob(nums));
