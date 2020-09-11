// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */

const arr = [10, 2, 5, 3];
const N = 6;

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
    arr[midIndex] === N
      ? true
      : arr[midIndex] < N
      ? (startIndex = midIndex += 1)
      : (endIndex = midIndex - 1);
  }
  return false;
};

binarySearch(arr, N)
  ? console.log(`N = ${N} exists in arr`)
  : console.log(`N = ${N} does NOT exist in arr`);
