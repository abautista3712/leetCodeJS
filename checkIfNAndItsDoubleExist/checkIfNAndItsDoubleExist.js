// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */

const arr = [10, 2, 5, 3];
const N = 5;

console.log("---arr before sort()---");
console.log(arr);

let binarySearch = (arr, N) => {
  arr.sort((a, b) => a - b);
  console.log("---arr after sort()---");
  console.log(arr);
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    console.log("---startIndex---");
    console.log(startIndex);
    console.log("---endIndex---");
    console.log(endIndex);
    let midIndex = Math.floor((startIndex + endIndex) / 2);
    console.log("---arr before plug-in---");
    console.log(arr);
    console.log("---midIndex---");
    console.log(midIndex);
    console.log("---Does arr[midIndex] === N?---");
    console.log(`arr[midIndex]: ${arr[midIndex]}`);
    console.log(`N: ${N}`);
    if (arr[midIndex] === N) {
      console.log("arr[midIndex] equals N. return true");
      return true;
    } else if (arr[midIndex] < N) {
      console.log("arr[midIndex] < N. Increase startIndex");
      startIndex = midIndex += 1;
    } else {
      console.log("arr[midIndex] > N. Decrease endIndex");
      endIndex = midIndex - 1;
      console.log("endIndex is now:");
      console.log(endIndex);
    }
  }
  return false;
};

// const checkIfExist = (arr) => {
// let iterativeFunction = (arr, N) => {
//   let startIndex = 0;
//   let endIndex = arr.length - 1;
//   while (startIndex <= endIndex) {
//     let midIndex = Math.floor((startIndex + endIndex) / 2);
//     console.log("---startIndex---");
//     console.log(startIndex);
//     console.log("---endIndex---");
//     console.log(endIndex);
//     console.log("---midIndex---");
//     console.log(midIndex);
//     console.log(arr[midIndex]);
//     if (arr[midIndex] === N) return true;
//     else if (arr[midIndex] < N) startIndex = midIndex + 1;
//     else endIndex = midIndex - 1;
//   }
//   return false;
// };
// };

// let arr = [1, 3, 5, 7, 8, 9];
// let N = 3;

binarySearch(arr, N) ? console.log("true") : console.log("false");

// if (iterativeFunction(arr, x, 0, arr.length - 1)) console.log("Element found!");
