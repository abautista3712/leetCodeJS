/**
 * @param {number[]} nums
 * @return {number[]}
 */

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

var findDisappearedNumbers = function (nums) {
  let index = 0;

  //   let uniqueSet = new Set([...nums]);
  //   nums = [...uniqueSet];

  //   console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    if (i != nums[i] && nums[i] <= nums.length) {
    } else {
      nums[index++] = i;
    }
  }

  while (nums.length > index) {
    nums.pop();
  }

  return nums;
};

console.log(findDisappearedNumbers(nums));
