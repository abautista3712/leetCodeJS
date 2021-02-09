/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1, 1, 2];

var thirdMax = function (nums) {
  if (!nums || nums.length === 0) {
    return;
  }

  let res = new Set([...nums].sort((a, b) => b - a));
  nums = [...res];

  if (nums.length < 2) {
    return nums[0];
  }

  if (nums.length < 3) {
    if (nums[0] > nums[1]) {
      return nums[0];
    } else {
      return nums[1];
    }
  }

  return nums[2];
};

console.log(thirdMax(nums));
