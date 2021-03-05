/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [11, 15, 2, 7];
let target = 9;

var twoSum = function (nums, target) {
  let total = 0;
  let indexes = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      total += nums[i];
      indexes.push(i);
      if (total === target) {
        return indexes;
      }
    }
  }
};

console.log(twoSum(nums, target));
