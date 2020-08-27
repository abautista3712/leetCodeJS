// Testing Example 1
// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
const arr = [1, 0, 2, 3, 0, 4, 5, 0];

const duplicateZeros = (arr) => {
  let i = arr.length;
  while (i--) {
    // if (arr[i] === 0) {
    // console.log(arr);
    console.log(arr[i]);
    // if (arr[i] === 0) {
    //   console.log(`0 found at index ${i}`);
      arr.splice(, 0, 0);
    // }
    //   return;
    //   console.log(arr[i]);
    //   arr.unshift("insert");
    // }
    // i++;
  }
};

duplicateZeros(arr);

// console.log(arr);
