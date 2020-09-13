// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */

const arr = [7, 1, 14, 11];
// let M = 0;
// let N = 2 * M;

let binarySearch = (arr, M) => {
  console.log("---arr BEFORE sort()---");
  console.log(arr);

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

for (let i = 0; i < arr.length; i++) {
  if (binarySearch(arr, arr[i])) {
    console.log(`M = ${arr[i]} exists in arr`);
    if (binarySearch(arr, arr[i] * 2)) {
      console.log(`N = ${arr[i] * 2} exists in arr`);
    } else {
      console.log(`N = ${arr[i] * 2} does NOT exist in arr`);
    }
  } else {
    console.log(`M = ${arr[i]} does NOT exist in arr`);
  }
