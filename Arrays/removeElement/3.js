// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

var removeElement = function (nums, val) {
  let n = nums.length;
  let count = 0;

  for (let i = 0, j = 0; j < n; j++) {
    if (nums[j] != val) {
      let tmp = nums[i];
      nums[i++] = nums[j];
      nums[j] = tmp;
      count++;
    }
  }
  while (nums.length > count) {
    nums.pop();
  }
};

removeElement(nums, val);
console.log(nums, val);
