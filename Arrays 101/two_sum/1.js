/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [0, 7, 11, 0];
let target = 0;

var twoSum = function (nums, target) {
  let total = 0;
  let subtract = 0;
  let count = 0;
  let indexes = [];

  for (let i = 0; i < nums.length; i++) {
    if (target === 0 && nums[i] === 0) {
      indexes.push(i);

      if (i === nums.length - 1) {
        return indexes;
      }
    } else if (nums[i] <= target) {
      total += nums[i];
      count++;
      indexes.push(i);

      if (total > target) {
        subtract = total - target;

        for (let j = 0; j < nums.length; j++) {
          if (nums[j] === subtract) {
            total -= subtract;

            let tmp = indexes[indexes.length - 1];
            indexes[indexes.length - 1] = indexes[j];
            indexes[j] = tmp;

            count--;
          }
        }
      }

      if (total === target) {
        while (indexes.length > count) {
          indexes.pop();
        }
        return indexes;
      }
    }
  }
};

console.log(twoSum(nums, target));
