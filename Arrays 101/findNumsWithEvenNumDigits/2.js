/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function (nums) {
  let evenCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    let digitCalc = nums[i];
    while (digitCalc >= 1) {
      digitCalc = digitCalc / 10;
      count++;
    }
    if (count % 2 == 0) {
      evenCount++;
    }
  }
  return evenCount;
};
