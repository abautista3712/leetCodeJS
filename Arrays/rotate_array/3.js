/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [1, 2];
const k = 3;

var rotate = function (nums, k) {
  let cache = [];
  let count = 0;

  k = k % nums.length;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + k > nums.length - 1) {
      cache.push(nums[i]);
    }

    nums[i] = nums[i - k];

    if (nums[i - k] == undefined) {
      nums[i] = cache[count++];
    }
  }
  return nums;
};

console.log(rotate(nums, k));
