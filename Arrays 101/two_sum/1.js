/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [3, 3];
let target = 6;

var twoSum = function (nums, target) {
  let total = 0;
  let count = 0;
  let indexes = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      total += nums[i];
      indexes.push(i);

      if (total > target) {
        total -= nums[count];

        let tmp = indexes[count];
        indexes[count] = indexes[indexes.length - 1];
        indexes[indexes.length - 1] = tmp;

        count++;

        indexes.pop();
      }

      if (total === target) {
        return indexes;
      }
    }
  }
};

console.log(twoSum(nums, target));
