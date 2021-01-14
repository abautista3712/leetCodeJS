const nums = [-4, -1, 0, 3, 10];

const sortedSquares = (nums) => {
  const n = nums.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(nums[i] ** 2);
  }
  const sorted = arr.sort((a, b) => a - b);
  return sorted;
};

console.log(sortedSquares(nums));
