// Definitions to know: 'Fibonacci sequence' is a sequence equal such that the each number is the sum of the two preceeding numbers starting from 0 and 1.

// - Parameter(s)
//   - Function will take an integer, N equal to the number in the sequence
// - Return
//   - Function will return an integer equal to the value of Nth fibonacci sequence number
// - Example
//   - For example, if N = 2, this N is asking for the 2nd fibonacci sequence number (if you consider N = 0 as the 0th element)
// - Pseudocode
//   - Function(N)
//   - Loop, probably while loop since we don't have the length of the dataset
//   - Return Calculation

// BEST PRACTICE - Intuitive Solution //
// O(N) Time Complexity
const fibonacciCalc = (number) => {
  let a = 1;
  let b = 0;
  let tmp = 0;

  while (number >= 0) {
    tmp = a;
    a = a + b;
    b = tmp;
    number--;
  }

  return b;
};
