const arr = [1, 1, 0, 1, 1, 1];
let count = 0;

for (let a = 0; a < arr.length; a++) {
  if (arr[a] === arr[a + 1] && arr[a] === 1) {
    count++;
    console.log(count);
  }
}

console.log(count);
