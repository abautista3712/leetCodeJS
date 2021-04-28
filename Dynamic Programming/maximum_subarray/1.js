/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSubArray = function (nums) {
  // Kadane's Algorithm
  let local_max = -Infinity;
  let global_max = nums[0];

  for (let i = 0; i < nums.length - 1; i++) {
    local_max = Math.max(nums[i], (local_max = nums[i] + nums[i + 1]));
    global_max = Math.max(local_max, global_max);
    console.log(`local_max = ${local_max}`);
    console.log(`global_max = ${global_max}`);
  }
  return global_max;
};

console.log(maxSubArray(nums));
