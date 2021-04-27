/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSubArray = function (nums) {
  // Kadane's Algorithm
  let local_max = -Infinity;
  let global_max = nums[0];

  for (let i = 0; i < nums.length; i++) {}
  return global_max;
};

console.log(maxSubArray(nums));
