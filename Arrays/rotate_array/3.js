/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 1;

var rotate = function (nums, k) {
  let cache = [];

  for (let i = nums.length; i >= 0; i--) {
    if (i + k > nums.length) {
      cache.push(i);
    } else {
      nums[i] = nums[i - k];
    }
  }
  return nums;
};

console.log(rotate(nums, k));
