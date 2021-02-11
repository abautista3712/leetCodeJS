/**
 * @param {number[]} heights
 * @return {number}
 */
const heights = [1, 1, 4, 2, 1, 3];

var heightChecker = function (heights) {
  let sortedHeights = heights.slice().sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] != sortedHeights[i]) {
      count++;
    }
  }

  return count;
};

console.log(heightChecker(heights));
