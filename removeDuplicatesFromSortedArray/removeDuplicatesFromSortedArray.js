// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

const nums = [1, 1, 2];
const uniqueVals = [1];

const removeDuplicates = (nums) => {
  let i = nums.length - 1;
  while (i >= 0) {
    if (uniqueVals.length === 0) {
      i--;
    } else if (uniqueVals.includes(nums[i])) {
      i--;
    } else {
      uniqueVals.push(nums[i]);
      i--;
    }
  }
};

removeDuplicates(nums);
console.log("---nums---");
console.log(nums);
console.log("---uniqueVals---");
console.log(uniqueVals);
