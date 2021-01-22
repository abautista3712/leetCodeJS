// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
const nums = [3, 1, 3, 3, 3];
const val = 3;

var removeElement = function (nums, val) {
  const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };

  let i = nums.length - 1;
  while (i >= 0) {
    if (nums[i] == val) {
      swap(nums, i, nums.length - 1);
      nums.pop();
    }
    i--;
  }
};

removeElement(nums, val);
console.log(nums, val);
