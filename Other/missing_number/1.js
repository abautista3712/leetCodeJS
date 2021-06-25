/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [
  45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
  4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30,
  25, 47, 0, 31, 42, 24, 10, 14,
];
var missingNumber = function (nums) {
  let n = nums.length;
  let sorted_nums = nums.sort((a, b) => a - b);

  if (sorted_nums[0] != 0) {
    return 0;
  }

  for (let i = 0; i <= n; i++) {
    if (sorted_nums[i + 1] - sorted_nums[i] != 1) {
      return sorted_nums[i] + 1;
    }
  }
};
console.log(missingNumber(nums));
