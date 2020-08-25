// Testing Example 1
const nums = [12, 345, 2, 6, 7896];
let count = 0;

// Counting digits from nums[0]
for (let a = 0; a < 6; a++) {
  if (Math.floor(nums[0] / Math.pow(10, a)) !== 0) {
    console.log(`---Math.floor(nums[0] / Math.pow(10, ${a}))---`);
    console.log(Math.floor(nums[0] / Math.pow(10, a)));
    count++;
  }
}

console.log("---count---");
console.log(count);
