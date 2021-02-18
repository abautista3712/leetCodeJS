/**
 * @param {number[]} nums
 * @return {number[]}
 */

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

var findDisappearedNumbers = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const newIndex = Math.abs(nums[i]) - 1;
    if (nums[newIndex] > 0) {
      nums[newIndex] *= -1;
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) {
      result.push(i);
    }
  }
  return result;
};

console.log(findDisappearedNumbers(nums));
