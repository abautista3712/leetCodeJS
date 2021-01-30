// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
const A = [3, 1, 2, 4];
var sortArrayByParity = function (A) {
  const n = A.length;

  if (!A || n == 0) {
    return [];
  }

  for (let i = n - 1, index = A[n]; i >= 0; i--) {
    console.log(i);
  }

  return A;
};

console.log(sortArrayByParity(A));
