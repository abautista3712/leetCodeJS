// Testing Example 1
// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Testing Example 2
// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]

const arr = [1, 0, 2, 3, 0, 4, 5, 0];
const zeroesIndexes = [];

const duplicateZeros = (arr) => {
  let i = arr.length;
  while (i--) {
    if (arr[i] === 0) {
      zeroesIndexes.push(i);
    }
  }
  let j = 0;
  while (j < zeroesIndexes.length) {
    arr.splice(zeroesIndexes[j], 0, 0);
    arr.pop();
    j++;
  }
};

duplicateZeros(arr);
console.log(`---arr after function call---`);
console.log(arr);
console.log(`---zeroesIndexes after function call---`);
console.log(zeroesIndexes);
