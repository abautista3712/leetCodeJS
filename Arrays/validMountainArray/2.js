// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
const arr = [0, 1, 2, 1, 2];

var validMountainArray = function (arr) {
  const n = arr.length;
  let indexMax = arr.indexOf(Math.max(...arr));
  if (n < 3) {
    console.log(1);
    return false;
  }

  if (indexMax == 0 || indexMax == n - 1) {
    return false;
  }

  let i = indexMax - 1;
  if (i == 0) {
    if (arr[i] >= arr[indexMax]) {
      console.log(2);
      return false;
    }
  }

  while (i > 0) {
    if (arr[i - 1] < arr[i]) {
      i--;
    } else {
      return false;
    }
  }

  let j = indexMax + 1;
  if (j == n - 1) {
    if (arr[n - 1] >= arr[indexMax]) {
      console.log(4);
      return false;
    }
  }

  while (j < n - 1) {
    if (arr[j + 1] < arr[j]) {
      j++;
    } else {
      console.log(5);
      return false;
    }
  }
  return true;
};

console.log(validMountainArray(arr));
