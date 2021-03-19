/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const arr = [1, 0, 2, 3, 0, 4, 5, 0];

var duplicateZeros = function (arr) {
  let n = arr.length;

  let i = arr.length - 1;
  let insertionCount = 0;
  while (i >= 0) {
    if (arr[i] == 0) {
      arr.splice(i, 0, 0);
    }
    insertionCount++;
    i--;
  }

  arr.splice(n, insertionCount);

  return arr;
};

console.log(duplicateZeros(arr));
