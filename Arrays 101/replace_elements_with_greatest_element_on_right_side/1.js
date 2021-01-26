// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */

const arr = [400];

var replaceElements = function (arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }

    if (i === n - 1) {
      arr[i] = -1;
    } else {
      arr[i] = max;
    }
  }

  return arr;
};

console.log(replaceElements(arr));
