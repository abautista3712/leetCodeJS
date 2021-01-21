// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

var removeElement = function (nums, val) {
  let n = nums.length;

  const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };

  for (let i = 0; i < n; i++) {
    if (nums[nums.length - 1] == val) {
      nums.pop();
    }
    if (nums[i] == val) {
      swap(nums, i, nums.length - 1);
      nums.pop();
    }
  }
  return nums, val;
};

removeElement(nums, val);
