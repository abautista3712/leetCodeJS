const arr = [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];
let count = 1;
let max = 0;

console.log("---Initial value of 'count'---");
console.log(count);

for (let a = 0; a < arr.length; a++) {
  if (!arr.includes(1)) {
    console.log("---No 1's present in array. Count is 0---");
    count = 0;
  } else if (arr[a] === 1 && arr[a] === arr[a + 1]) {
    console.log("---1's present in array: 1 found. Increase 'count' by 1---");
    count++;
    console.log("---'count' inside for loop---");
    console.log(count);
    console.log("---'max' inside for loop---");
    console.log(max);
    if (count > max) {
      max = count;
    }
  } else if (arr[a] === 0) {
    console.log("---1's present in array: 0 found. 'count' reset to 1---");
    count = 1;
  }
}

console.log("---count---");
console.log(count);

console.log("---max---");
console.log(max);
