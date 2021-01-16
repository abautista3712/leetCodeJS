let arr = [];

let numItems = 6;
let numVariability = 10;

for (i = 0; i < numItems; i++) {
  arr.push(Math.floor(Math.random() * numVariability));
}

function swap(array, i, j) {
  console.log("-->swap called---");
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function quicksortHoare(array, left, right) {
  console.log(`---quicksortHoare called---`);
  console.log(array);
  left = left || 0;
  console.log(`left = ${left}`);
  right = right || array.length - 1;
  console.log(`right = ${right}`);

  let pivot = partitionHoare(array, left, right);
  console.log(`pivot: ${pivot}`);

  if (left < pivot - 1) {
    quicksortHoare(array, left, pivot - 1);
  }

  if (right > pivot) {
    quicksortHoare(array, pivot, right);
  }

  return array;
}

function partitionHoare(array, left, right) {
  console.log("-->partitionHoare called---");
  let pivot = Math.floor((left + right) / 2);
  console.log(`pivot = ${pivot}`);
  while (left < right) {
    while (array[left] < array[pivot]) {
      left++;
    }
    while (array[right] > array[pivot]) {
      right--;
    }

    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}

console.time("quicksortHoare");
console.log(quicksortHoare(arr));
console.timeEnd("quicksortHoare");
