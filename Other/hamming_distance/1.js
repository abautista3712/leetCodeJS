/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const x = 1;
const y = 4;

var hammingDistance = function (x, y) {
  // Convert integer x to binary
  const binary_x = x.toString(2);
  // Convert integer y to binary
  const binary_y = y.toString(2);

  return binary_y;
  // Conditional statement
  //     -Scan from right to left
  //     -Count variable
  //         -If 0, move left
  //         -If 1, add one to Count, move left
  //         -If 1 again, return Count variable
  //         -Else add one to count and move left until 1 again
};

console.log(hammingDistance(x, y));
