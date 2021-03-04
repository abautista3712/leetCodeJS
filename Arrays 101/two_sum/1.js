/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2, 7, 11, 15];
let target = 9;

var twoSum = function (nums, target) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    count++;
    if (total === target) {
      while (nums.length > count) {
        nums.pop();
      }
      return nums;
    }
  }
};

console.log(twoSum(nums, target));
