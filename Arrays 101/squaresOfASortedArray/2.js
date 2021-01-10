/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nums = [-4, -1, 0, 3, 10];

var sortedSquares = function (nums) {
  let x = nums.length;

  let squareCalc = (number) => {
    return number ** 2;
  };
  for (let number in nums) {
    console.log(squareCalc(nums[number]));
  }
};

sortedSquares(nums);
