/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [-1, -100, 3, 99];
const k = 2;

var rotate = function (nums, k) {
  let new_index = 0;

  let nums_cache = [...nums];

  for (let i = 0; i < nums.length; i++) {
    new_index = (i + k) % nums.length;
    nums_cache[new_index] = nums[i];
  }
  return nums_cache;
};

console.log(rotate(nums, k));
