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
};

duplicateZeros(arr);

console.log(`arr ${arr}`);
console.log(`zeroesIndex ${zeroesIndexes}`);
