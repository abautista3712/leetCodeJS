// Testing Example 1
// Input: [-4, -1, 0, 3, 10]
// Output Success: [0,1,9,16,100]

// Testing Example 2
// Input: [-7,-3,2,3,11]
// Output Success: [4,9,9,49,121]

// Test Case
// Input: [367, 4, 29, 72, 5]

const A = [-4, -1, 0, 3, 10];

const sortedSquares = (A) => {
  const Squares = [];
  for (let i = 0; i < A.length; i++) {
    Squares.push(Math.pow(A[i], 2));
  }
  Squares.sort((a, b) => a - b);
  //   console.log(Squares);
  return Squares;
};

sortedSquares(A);
