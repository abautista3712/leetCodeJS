// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = (nums) => {
  const uniqueVals = [];
  let i = nums.length - 1;
  while (i >= 0) {
    if (uniqueVals.length === 0) {
      uniqueVals.push(nums[i]);
      i--;
    } else if (uniqueVals.includes(nums[i])) {
      nums.splice(i, 1);
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
