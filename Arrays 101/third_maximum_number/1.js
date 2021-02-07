/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1, 3];

var thirdMax = function (nums) {
  const n = nums.length;

  if (!nums || n === 0) {
    return;
  }

  if (n < 3) {
    if (nums[0] > nums[1]) {
      return nums[0];
    } else {
      return nums[1];
    }
  }
};

console.log(thirdMax(nums));
