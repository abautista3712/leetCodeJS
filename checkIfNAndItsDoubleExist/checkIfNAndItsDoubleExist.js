// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */

const arr = [-2, 0, 10, -19, 4, 6, -8];

let binarySearch = (arr, M) => {
  // console.log("---arr BEFORE sort()---");
  // console.log(arr);
  arr.sort((a, b) => a - b);
  // console.log("---arr AFTER sort()---");
  // console.log(arr);
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

const checkIfExist = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (binarySearch(arr, arr[i])) {
      console.log(`Checking for value M = ${arr[i]}...`);
      console.log(`M = ${arr[i]} exists in arr`);
      if (arr[i] === 0) {
        console.log(`N = 0. Ending search.`);
        return false;
      } else if (binarySearch(arr, arr[i] * 2)) {
        console.log(`N = ${arr[i] * 2} exists in arr. Ending search.`);
        return true;
      } else if (i === arr.length - 1) {
        console.log(
          `N = ${arr[i] * 2} does NOT exist in arr. End of arr. Ending search.`
        );
        return false;
      } else {
        console.log(`N = ${arr[i] * 2} does NOT exist in arr`);
        console.log("Checking next value of M...");
      }
    } else {
      console.log(`M = ${arr[i]} does NOT exist in arr`);
      return false;
    }
  }
};

checkIfExist(arr);
