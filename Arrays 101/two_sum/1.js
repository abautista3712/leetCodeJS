/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [-3, 7, 11, 3];
let target = 0;

var twoSum = function (nums, target) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      result[1] = i;
      result[0] = map.get(target - nums[i]);
      return result;
    }
    map.set(nums[i], i);
  }
  return result;
};

console.log(twoSum(nums, target));
