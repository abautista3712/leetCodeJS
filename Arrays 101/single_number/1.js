/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1];

var singleNumber = function (nums) {
  const n = nums.length;

  let double = false;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i + 1]) {
      double = true;
    }
    if (nums[i] != nums[i + 1]) {
      if (double === true) {
        double = false;
      } else return nums[i];
    }
  }
  return "All numbers appear twice.";
};

console.log(singleNumber(nums));
