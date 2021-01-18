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
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  function quickSort(array, left, right) {
    if (left >= right) {
      return;
    }
    left = left || 0;
    right = right || array.length - 1;

    const index = partition(array, left, right);

    quickSort(array, left, index - 1);
    quickSort(array, index, right);

    return array;
  }

  function partition(array, left, right) {
    const pivot = array[Math.floor((left + right) / 2)];
    while (left <= right) {
      while (array[left] < pivot && left <= right) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        swap(array, left, right);
        left++;
        right--;
      }
    }
    return left;
  }
  return quickSort(squares);
};
console.log(sortedSquares(nums));
