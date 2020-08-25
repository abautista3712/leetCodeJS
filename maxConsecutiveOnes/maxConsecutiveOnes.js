const arr = [1, 1, 0, 1, 1, 1];
let count = 1;
let max;

console.log("---Initial value of 'count'---");
console.log(count);

for (let a = 0; a < arr.length; a++) {
  if (arr[a] === 1 && arr[a] === arr[a + 1]) {
    count++;
    console.log("---1 found. Increase 'count'---");
    console.log(count);
  } else if (arr[a] === 0) {
    console.log("---No 1's found. 'count' reset to 1---");
    count = 1;
  }
}

console.log(count);
