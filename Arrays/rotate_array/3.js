/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 1;

var rotate = function (nums, k) {
  let cache = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    console.log(`---i = ${i}---`);
    if (i + k > nums.length - 1) {
      cache.push(nums[i]);
      console.log(`cache: ${cache}`);
    }

    nums[i] = nums[i - k];

    console.log(nums);
  }
  return nums;
};

console.log(rotate(nums, k));
