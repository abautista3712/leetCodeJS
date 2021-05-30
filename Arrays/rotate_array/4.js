/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

var rotate = function (nums, k) {
  let cache = [];

  for (let i = 0; i < nums.length; i++) {
    cache.push(nums[i]);
  }
};

console.log(rotate(nums, k));
