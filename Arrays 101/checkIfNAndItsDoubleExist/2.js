/**
 * @param {number[]} arr
 * @return {boolean}
 */

const arr = [3, 1, 7, 11];

var checkIfExist = function (arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] == 2 * arr[j]) return true;
    }
  }
  return false;
};

console.log(checkIfExist(arr));
