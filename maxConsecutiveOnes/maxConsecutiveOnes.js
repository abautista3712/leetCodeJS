const nums = [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1];

const findMaxConsecutiveOnes = (nums) => {
  let count = 1;
  let max = 0;

  for (let a = 0; a < nums.length; a++) {
    if (!nums.includes(1)) {
      count = 0;
    } else if (nums[a] === 1 && nums[a] === nums[a + 1]) {
      count++;
      if (count > max) {
        max = count;
      }
    } else if (nums[a] === 0) {
      count = 1;
    }
  }

  console.log("---max # of consecutive ones---");
  console.log(max);
  return max;
};

findMaxConsecutiveOnes(nums);
