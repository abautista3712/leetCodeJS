/**
 * @param {number[]} nums
 * @return {number[]}
 */

const nums = [-4, -1, 0, 3, 10];

var sortedSquares = function (nums) {
  let index = 0;

  for (num of nums) {
    nums[index++] = num ** 2;
  }
  nums.sort((a, b) => a - b);

  return nums;
};

console.log(sortedSquares(nums));
