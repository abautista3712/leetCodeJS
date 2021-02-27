/**
 * @param {number[]} nums
 * @return {boolean}
 */
const nums = [1, 2, 3, 1];

var containsDuplicate = function (nums) {
  const n = nums.length;
  let i = 0;
  let count = [];

  for (i = 0; i < n; i++) {
    count[i] = 0;
  }

  for (i = 0; i < n; i++) {
    count[nums[i]]++;
    if (count[nums[i]] > 1) {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate(nums));
