/**
 * @param {number[]} nums
 * @return {boolean}
 */
const nums = [3, 3];
var containsDuplicate = function (nums) {
  const n = nums.length;
  let hash_table = [];

  for (let i = 0; i < n; i++) {
    if (hash_table[nums[i]] === undefined) {
      hash_table[nums[i]] = nums[i];
    } else return true;
  }
  return false;
};

console.log(containsDuplicate(nums));
