// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
  const swap = (nums, i, j) => {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  };

  let i = nums.length - 1;
  while (i >= 0) {
    if (nums[i] == nums[i - 1]) {
      swap(nums, i, nums.length - 1);
      nums.pop();
    }
    i--;
  }
  let n = nums.length;
  return n;
};

removeDuplicates(nums);
console.log(nums);
