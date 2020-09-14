// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */

const arr = [10, 2, 5, 3];

let checkIfExist = (arr, M) => {
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

for (let i = 0; i < arr.length; i++) {
  if (checkIfExist(arr, arr[i])) {
    console.log(`Checking for value M = ${arr[i]}...`);
    console.log(`M = ${arr[i]} exists in arr`);
    if (checkIfExist(arr, arr[i] * 2)) {
      console.log(`N = ${arr[i] * 2} exists in arr. Ending search.`);
      return true;
    } else {
      console.log(`N = ${arr[i] * 2} does NOT exist in arr`);
      console.log("Checking next value of M...");
    }
  } else {
    console.log(`M = ${arr[i]} does NOT exist in arr`);
    return false;
  }
}
