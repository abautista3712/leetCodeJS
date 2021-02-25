/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 1;

var rotate = function (nums, k) {
  if (nums == null || nums.length < 2) {
    return;
  }

  let reverse = (nums, i, j) => {
    let tmp = 0;
    while (i < j) {
      tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
      i++;
      j--;
    }
  };

  console.log(nums);

  k = k % nums.length;
  reverse(nums, 0, nums.length - k - 1);
  console.log(nums);
  reverse(nums, nums.length - k, nums.length - 1);
  console.log(nums);
  reverse(nums, 0, nums.length - 1);

  return nums;
};

console.log(rotate(nums, k));
