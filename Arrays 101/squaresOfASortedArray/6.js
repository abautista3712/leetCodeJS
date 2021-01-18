// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

const nums = [10, 2, 3, 4, 10];

var sortedSquares = function (nums) {
  let n = nums.length;
  let squares = [];

  for (let i = 0; i < n; i++) {
    squares.push(nums[i] ** 2);
  }

  let m = squares.length;
  const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };

  const quickSort = (arr, left, right) => {
    left = left || 0;
    right = right || m - 1;

    let pivot = partition(arr, left, right);

    if (left < pivot - 1) {
      quickSort(arr, left, pivot - 1);
    }

    if (right > pivot) {
      quickSort(arr, pivot, right);
    }

    return arr;
  };

  const partition = (arr, left, right) => {
    let pivot = Math.floor((left + right) / 2);

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

  return quickSort(squares);
};
console.log(sortedSquares(nums));
