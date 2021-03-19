// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
const arr = [0, 3, 2, 1];

var validMountainArray = function (arr) {
  const n = arr.length;
  let max = 0;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }

    if (max === 0) {
      if (arr[i] > arr[i + 1]) {
        max = i;
      }
    } else if (arr[i] <= arr[i + 1]) {
      return false;
    }
  }
  if (arr[0] < arr[1] && max != 0) {
    return true;
  } else return false;
};

console.log(validMountainArray(arr));
