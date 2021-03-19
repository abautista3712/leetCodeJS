// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
let nums = [2, 2, 3, 3, 5, 5, 7, 10];

var removeDuplicates = function (nums) {
  const n = nums.length;

  if (!nums || !n) {
    return 0;
  }

  let uniqueCount = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }
  return uniqueCount;
};

console.log(removeDuplicates(nums));
console.log(nums);
