// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
const arr = [0, 3, 2, 1];

var validMountainArray = function (arr) {
  const n = arr.length;
  let indexMax = arr.indexOf(Math.max(...arr));
  if (n < 3) {
    return false;
  }

  let i = indexMax - 1;
  if (i == 0) {
    if (arr[i] >= arr[indexMax]) {
      return false;
    }
  }

  while (i > 0) {
    if (arr[i] < arr[i - 1]) {
      i--;
    } else return false;
  }

  let j = indexMax + 1;
  if (j == n - 1) {
    if (arr[n - 1] <= arr[indexMax]) {
      return false;
    }
  }

  while (j > n - 1) {
    if (arr[j] < arr[j + 1]) {
      j++;
    } else return false;
  }
  return true;
};

console.log(validMountainArray(arr));
