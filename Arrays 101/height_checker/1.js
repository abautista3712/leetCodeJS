/**
 * @param {number[]} heights
 * @return {number}
 */
const heights = [1, 1, 4, 2, 1, 3];

var heightChecker = function (heights) {
  const n = heights.length;

  function countingSort(arr, min, max) {
    var i,
      z = 0,
      count = [];

    for (i = min; i <= max; i++) {
      count[i] = 0;
    }

    for (i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }

    for (i = min; i <= max; i++) {
      while (count[i]-- > 0) {
        arr[z++] = i;
      }
    }
    return arr;
  }
  console.log(countingSort(heights, 0, n));
};

console.log(heightChecker(heights));
// console.log(heights);
