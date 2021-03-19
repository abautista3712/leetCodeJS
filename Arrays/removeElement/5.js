// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

var removeElement = function (nums, val) {
  let n = nums.length;
  let index = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] != val) {
      nums[index++] = nums[i];
    }
  }
  return index;
};

removeElement(nums, val);
console.log(nums, val);
