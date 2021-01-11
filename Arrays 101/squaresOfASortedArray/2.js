/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nums = [-7, -3, 2, 3, 11];

var sortedSquares = function (nums) {
  let n = nums.length;

  let squareNums = (number) => {
    return number ** 2;
  };

  for (let i = 0; i < n; i++) {
    nums[i] = squareNums(nums[i]);
  }

  console.log(nums);
  return nums;
};

sortedSquares(nums);
