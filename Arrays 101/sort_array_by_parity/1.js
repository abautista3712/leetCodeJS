// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
const A = [3, 1, 2, 4];
var sortArrayByParity = function (A) {
  const n = A.length;
  let index = 0;

  if (!A || n == 0) {
    return [];
  }

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
