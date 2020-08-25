// Testing Example 1
const nums = [12, 345, 2, 6, 7896];
let count = 0;
let even = 0;

// Counting digits from nums[0]
for (let a = 0; a < nums.length; a++) {
  console.log("Checking if number of digits is even");
  if (count % 2 === 0) {
    even++;
  }
  console.log(even);
  console.log("Resetting count to 0:");
  count = 0;
  console.log(count);
  for (let b = 0; b < 6; b++) {
    if (Math.floor(nums[a] / Math.pow(10, b)) !== 0) {
      console.log(`---Math.floor(nums[${a}] / Math.pow(10, ${b}))---`);
      console.log(Math.floor(nums[a] / Math.pow(10, b)));
      console.log("Adding 1 to count:");
      count++;
      console.log(count);
    }
  }
}

console.log("---count---");
console.log(count);
console.log("---even---");
console.log(even);
