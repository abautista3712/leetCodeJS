/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nums = [-7, -3, 2, 3, 11];

var sortedSquares = function (nums) {
  let n = nums.length;

  let squareNums = (number) => {
    return number ** 2;
  };

  for (let i = 0; i < n; i++) {
    nums[i] = squareNums(nums[i]);
  }

  const merge = (left, right) => {
    const arr = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return [...arr, ...left, ...right];
  };

  const mergeSort = (nums) => {
    const half = nums.length / 2;

    if (nums.length < 2) {
      return nums;
    }

    const left = nums.splice(0, half);

    return merge(mergeSort(left), mergeSort(nums));
  };
  return mergeSort(nums);
};

sortedSquares(nums);
