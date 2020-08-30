// Testing Example 1
// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
const arr = [1, 0, 2, 3, 0, 4, 5, 0];
const zeroesIndexes = [];

const duplicateZeros = (arr) => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      zeroesIndexes.push(i);
    }
    i++;
  }
  let j = 0;
  while (j < zeroesIndexes.length) {
    arr.splice(zeroesIndexes.reverse()[j], 0, 0);
    j++;
  }
};

duplicateZeros(arr);
console.log(`---arr after function call---`);
console.log(arr);
console.log(`---zeroesIndexes after function call---`);
console.log(zeroesIndexes);
