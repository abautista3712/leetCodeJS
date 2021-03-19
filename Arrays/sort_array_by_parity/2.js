// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
const A = [3, 1, 2, 4];
var sortArrayByParity = function (A) {
  const n = A.length;

  for (let i = 0, j = 0; j < n; j++) {
    if (A[j] % 2 == 0) {
      let tmp = A[i];
      A[i++] = A[j];
      A[j] = tmp;
    }
  }
  return A;
};

console.log(sortArrayByParity(A));
