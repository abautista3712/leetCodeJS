// Testing Example 1
// Expected Output: [0,1,9,16,100]
const A = [-4, -1, 0, 3, 10];

const sortedSquares = (A) => {
  //   for (let i = 0; i < A.length; i++) {
  //     console.log(A[i]);
  //   }
  A.sort((a, b) => a - b);
  console.log(A);
};

sortedSquares(A);
