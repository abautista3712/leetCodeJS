/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

var rotate = function (nums, k) {
  let cache = [];
  let count = k;

  for (let i = k + 1; i < nums.length; i++) {
    cache.push(nums[i]);
  }

  //   let reverse_cache = cache.reverse();
  //   let rev_count = reverse_cache.length - 1;
  let cache_count = cache.length - 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    if (j >= k) {
      nums[j] = nums[count--];
    } else {
      nums[j] = cache[cache_count--];
    }
  }

  return nums;
};

console.log(rotate(nums, k));
