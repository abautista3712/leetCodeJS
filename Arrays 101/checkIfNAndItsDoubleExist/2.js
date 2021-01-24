/**
 * @param {number[]} arr
 * @return {boolean}
 */

const arr = [-2, 0, 10, -19, 4, 6, -8];

var checkIfExist = function (arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] == 2 * arr[i] && arr[i] != 0) {
        return true;
      }
      if (arr[i] == 0 && i != j && arr[j] == 2 * arr[i]) {
        return true;
      }
    }
  }
  return false;
};

console.log(checkIfExist(arr));
