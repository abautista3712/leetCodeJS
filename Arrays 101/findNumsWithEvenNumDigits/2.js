/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [100000];

var findNumbers = function (nums) {
  let evenCount = 0;
  const calculateDigits = (number) => {
    return Math.floor(Math.log10(number) + 1);
  };

  for (let number in nums) {
    if (calculateDigits(nums[number]) % 2 === 0) {
      evenCount++;
    }
  }
  console.log(evenCount);
  return evenCount;
};

findNumbers(nums);
