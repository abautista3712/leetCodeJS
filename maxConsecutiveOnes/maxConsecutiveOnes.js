const arr = [1, 1, 0, 1, 1, 1];
let a = 0;
let b = a + 1;
let duplicates = [];
// let arr2 = [];

for (a; a < arr.length; a++) {
  if (arr[a] == arr[b]) {
    duplicates.push(a);
  }
}

console.log(duplicates);
