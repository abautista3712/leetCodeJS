/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [12, 345, 2, 6, 7896];

var findNumbers = function (nums) {
  let evenCount = 0;
  for (let i = 0, n = nums.length; i < n; i++) {
    let digits = nums[i].toString().length;
    if (digits % 2 == 0) {
      evenCount++;
    }
  }
  return evenCount;
};

findNumbers(nums);
