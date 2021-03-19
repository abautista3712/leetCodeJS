// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  let i = nums.length - 1;
  while (i >= 0) {
    if (nums[i] == nums[i - 1]) {
      nums.splice(i - 1, 1);
    }
    i--;
  }
};

removeDuplicates(nums);
console.log(nums);
