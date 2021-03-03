/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [3, 2, 4];
let target = 6;

var twoSum = function (nums, target) {
  let count = 0;
  let i = 0;

  while (target > 0) {
    if (nums[i] <= target) {
      target -= nums[i];
      nums[count++] = i;
    }
    i++;
  }
  while (nums.length > count) {
    nums.pop();
  }
  return nums;
};

console.log(twoSum(nums, target));
