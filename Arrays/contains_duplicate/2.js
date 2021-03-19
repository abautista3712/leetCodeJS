/**
 * @param {number[]} nums
 * @return {boolean}
 */
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

var containsDuplicate = function (nums) {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate(nums));
