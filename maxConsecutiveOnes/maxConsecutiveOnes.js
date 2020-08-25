// SOLVED
const nums = Array.from({ length: Math.floor(Math.random() * 10001) }, () =>
  Math.floor(Math.random() * 2)
);
console.log(`Array of ${nums.length} items:`);
console.log(nums);

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
