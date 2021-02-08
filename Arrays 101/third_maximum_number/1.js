/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [3, 2, 1, 4, 1, 10];

var thirdMax = function (nums) {
  const n = nums.length;

  if (!nums || n === 0) {
    return;
  }
  if (n < 2) {
    return nums[0];
  }

  if (n < 3) {
    if (nums[0] > nums[1]) {
      return nums[0];
    } else {
      return nums[1];
    }
  }

  let res = new Set([...nums].sort((a, b) => b - a));
  nums = [...res];

  return nums[2];
};

console.log(thirdMax(nums));
