// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */

const arr = [7, 1, 14, 11];
const M = 5;
const N = 2 * M;

console.log("---arr BEFORE sort()---");
console.log(arr);

let binarySearch = (arr, M) => {
  arr.sort((a, b) => a - b);
  console.log("---arr AFTER sort()---");
  console.log(arr);
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    if (arr[midIndex] === M) {
      return true;
    } else if (arr[midIndex] < M) {
      startIndex = midIndex += 1;
    } else {
      endIndex = midIndex - 1;
    }
  }
  return false;
};

binarySearch(arr, M)
  ? (console.log(`M = ${M} exists in arr`),
    binarySearch(arr, N)
      ? console.log(`N = ${N} exists in arr`)
      : console.log(`N = ${N} does NOT exist in arr`))
  : console.log(`M = ${M} does NOT exist in arr`);
