// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
const A = [3, 1, 2, 4];
var sortArrayByParity = function (A) {
  const n = A.length;
  let parityArr = [];

  if (!A || n == 0) {
    return [];
  }

  for (let i = 0; i < n; i++) {
    if (A[i] % 2 == 0) {
      parityArr.push(A[i]);
    }
  }

  for (let j = 0; j < n; j++) {
    if (A[j] % 2 != 0) {
      parityArr.push(A[j]);
    }
  }

  return parityArr;
};

console.log(sortArrayByParity(A));
