/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [4, 1, 2, 1, 2];

var singleNumber = function (nums) {
  const n = nums.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result ^= nums[i];
  }
  return result;
};

console.log(singleNumber(nums));
