/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [3, 0, 1];
var missingNumber = function (nums) {
  let n = nums.length;

  let sorted_nums = nums.sort();
  for (let i = 0; i <= n; i++) {
    if (sorted_nums[i + 1] - sorted_nums[i] != 1) {
      return sorted_nums[i] + 1;
    }
  }
};
console.log(missingNumber(nums));
