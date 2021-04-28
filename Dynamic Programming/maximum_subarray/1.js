/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSubArray = function (nums) {
  // Kadane's Algorithm
  let sum = 0;
  let max_sum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max_sum = Math.max(sum, max_sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max_sum;
};

console.log(maxSubArray(nums));
