// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */

const nums = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
  let n = nums.length;
  let index = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] != 0) {
      nums[index++] = nums[i];
    }
  }
  while (index < nums.length) {
    nums[index++] = 0;
  }
};

moveZeroes(nums);
console.log(nums);
