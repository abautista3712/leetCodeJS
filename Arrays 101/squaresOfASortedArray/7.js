/**
 * @param {number[]} nums
 * @return {number[]}
 */

const nums = [-7, -3, 2, 3, 11];

var sortedSquares = function (nums) {
  let res = [];

  let left_index = 0,
    right_index = nums.length - 1;

  while (left_index <= right_index) {
    let num1 = nums[left_index] ** 2,
      num2 = nums[right_index] ** 2;
    if (num1 > num2) {
      res.push(num1);
      left_index++;
    } else {
      res.push(num2);
      right_index--;
    }
  }
  return res.reverse();
};

console.log(sortedSquares(nums));
