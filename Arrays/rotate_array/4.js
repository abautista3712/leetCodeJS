/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

var rotate = function (nums, k) {
  let cache = [...nums];

  return cache;

  return k % nums.length;
};

console.log(rotate(nums, k));
