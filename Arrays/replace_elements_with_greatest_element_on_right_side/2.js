// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */

const arr = [17, 18, 5, 4, 6, 1];

var replaceElements = function (arr) {
  const n = arr.length;

  for (let i = n - 1, max = -1; i >= 0; i--) {
    max = Math.max(arr[i], (arr[i] = max));
  }
  return arr;
};

console.log(replaceElements(arr));
