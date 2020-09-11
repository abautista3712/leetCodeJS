// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */

const arr = [10, 2, 5, 3];
const N = 5;

console.log("---arr BEFORE sort()---");
console.log(arr);

let binarySearch = (arr, N) => {
  arr.sort((a, b) => a - b);
  console.log("---arr AFTER sort()---");
  console.log(arr);
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    if (arr[midIndex] === N) {
      return true;
    } else if (arr[midIndex] < N) {
      startIndex = midIndex += 1;
    } else {
      endIndex = midIndex - 1;
    }
  }
  return false;
};

binarySearch(arr, N)
  ? (console.log(`N = ${N} exists in arr`),
    binarySearch(arr, N * 2)
      ? console.log(`N*2 = ${N * 2} exists in arr`)
      : console.log(`N = ${N} does NOT exist in arr`))
  : console.log(`N = ${N} does NOT exist in arr`);
