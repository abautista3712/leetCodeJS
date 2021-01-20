// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

var removeElement = function (nums, val) {
  const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };

  const quickSort = (arr, left, right) => {
    const n = arr.length;

    if (left >= right) {
      return;
    }

    left = left || 0;
    right = right || n - 1;

    const index = partition(arr, left, right);

    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);

    return arr;
  };

  const partition = (arr, left, right) => {
    const pivot = Math.floor((left + right) / 2);

    while (left <= right) {
      while (arr[left] < arr[pivot]) {
        left++;
      }
      while (arr[right] > arr[pivot]) {
        right--;
      }

      if (left <= right) {
        swap(arr, left, right);
        left++;
        right--;
      }
    }
    return left;
  };
  quickSort(nums);
  console.log(nums);

  let n = nums.length;
  let i = n - 1;

  while (i >= 0) {
    if (nums[i] == val) {
      nums.pop();
    } else {
      i--;
    }
  }

  console.log(nums);
  return nums;
};

removeElement(nums, val);
