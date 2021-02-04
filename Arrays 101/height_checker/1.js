/**
 * @param {number[]} heights
 * @return {number}
 */
const heights = [1, 1, 4, 2, 1, 3];

var heightChecker = function (heights) {
  const n = heights.length;

  for (let i = 1; i < n; i++) {
    let currentVal = heights[i];
    let j = i - 1;
    while (j >= 0 && heights[j] > currentVal) {
      heights[j + 1] = heights[j];
      j--;
    }
    heights[j + 1] = currentVal;
  }
  return heights;
  // console.log(heights);
};

console.log(heightChecker(heights));
// console.log(heights);
