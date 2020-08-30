// Testing Example 1
// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
const arr = [1, 0, 2, 3, 0, 4, 5, 0];
const zeroes = [];

const duplicateZeros = (arr) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      zeroes.push(i);
    }
    // zeroes.push("test");
    // arr.splice(testArr[i], 0, "test");
    // console.log(arr);
    i++;
  }
};

duplicateZeros(arr);
console.log(zeroes);

// for (let j = 0; j < zeroesIndexes.length; j++) {
//   arr.splice(1, 0, `Inserted at j=${j}`);
// }

// console.log(arr);
// console.log(`arr.reverse() ${arr.reverse()}`);
