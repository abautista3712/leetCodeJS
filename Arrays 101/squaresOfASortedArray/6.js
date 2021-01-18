// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

const nums = [-10000, -1, 0, 3, 10000];

var sortedSquares = function (nums) {
  let n = nums.length;
  let squares = [];

  for (let i = 0; i < n; i++) {
    squares.push(nums[i] ** 2);
  }

  let m = squares.length;
  const swap = (arr, i, j) => {
    console.log("-->swap called---");
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };

  const quickSort = (arr, left, right) => {
    console.log(`---quicksortHoare called---`);
    console.log(arr);
    left = left || 0;
    console.log(`left = ${left}`);
    right = right || m - 1;
    console.log(`right = ${right}`);

    let pivot = partition(arr, left, right);
    console.log(`pivot after partition: ${pivot}`);
    console.log(`left after partition: ${left}`);
    console.log(`right after partition: ${right}`);

    if (left < pivot - 1) {
      console.log("quicksort LEFT");
      console.log(arr);
      console.log(`quicksort LEFT left = ${left}`);
      console.log(`quicksort LEFT right = ${right}`);
      quickSort(arr, left, pivot - 1);
    }

    if (right > pivot) {
      console.log("quicksort RIGHT");
      console.log(`quicksort RIGHT left = ${left}`);
      console.log(`quicksort RIGHT right = ${right}`);
      quickSort(arr, pivot, right);
    }

    return arr;
  };

  const partition = (arr, left, right) => {
    console.log("-->partitionHoare called---");
    let pivot = Math.floor((left + right) / 2);

    while (left < right) {
      console.log("left < right");
      console.log(`pivot = ${pivot}`);
      console.log(`arr[pivot] = ${arr[pivot]}`);
      while (arr[left] < arr[pivot]) {
        left++;
      }
      console.log(`first non-small left = ${left}`);
      console.log(`arr[left] = ${arr[left]}`);
      while (arr[right] > arr[pivot]) {
        right--;
      }
      console.log(`first non-big right = ${right}`);
      console.log(`arr[right] = ${arr[right]}`);
      if (left <= right) {
        swap(arr, left, right);
        left++;
        right--;
      }
      console.log(`left after swap = ${left}`);
      console.log(`right after swap = ${right}`);
    }
    console.log(`return pivot`);
    return left;
  };

  console.log(quickSort(squares));
};
sortedSquares(nums);
