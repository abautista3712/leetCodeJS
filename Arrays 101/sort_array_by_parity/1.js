// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
const A = [0, 1, 0, 3, 12];
var sortArrayByParity = function (A) {
  const n = A.length;
  let index = 0;

  for (let i = 0; i < n; i++) {
    if (A[i] % 2 == 0) {
      A[index++] = A[i];
    }
  }
  //   while (index < A.length) {
  //     A[index++] = 0;
  //   }

  return A;
};

console.log(sortArrayByParity(A));
