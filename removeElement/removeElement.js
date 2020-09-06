// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const removeElement = (nums, val) => {
  nums.sort((a, b) => a - b);
  let i = nums.length;
  while (i >= 0) {
    if (nums[i] != val) {
      i--;
    } else if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
};

removeElement(nums, val);
console.log(nums);
