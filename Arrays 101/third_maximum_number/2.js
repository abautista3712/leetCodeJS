/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1, 2, -2147483648];

var thirdMax = function (nums) {
  let first_max = -Infinity,
    second_max = -Infinity,
    third_max = -Infinity;

  for (let num of nums) {
    if (num > first_max) {
      third_max = second_max;
      second_max = first_max;
      first_max = num;
    } else if (num > second_max && num < first_max) {
      third_max = second_max;
      second_max = num;
    } else if (num > third_max && num < second_max) {
      third_max = num;
    }
  }

  return third_max > -Infinity ? third_max : first_max;
};

console.log(thirdMax(nums));
