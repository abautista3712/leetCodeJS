// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */

const nums = [3, 2, 2, 3];
const val = 3;

const removeElement = (nums, val) => {
  let i = nums.length;
  while (i >= 0) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
    i--;
  }
};

removeElement(nums, val);
console.log(nums);
