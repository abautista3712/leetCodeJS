// Testing Example 1
const nums = [12, 345, 2, 6, 7896];
let count = 0;
let even = 0;

// Counting digits from nums[0]
// for (let a = 0; a < nums.length; a++) {
for (let b = 0; b < 6; b++) {
  if (Math.floor(nums[1] / Math.pow(10, b)) !== 0) {
    console.log(`---Math.floor(nums[1] / Math.pow(10, ${b}))---`);
    console.log(Math.floor(nums[1] / Math.pow(10, b)));
    count++;
  }
}
// }

if (count % 2 === 0) {
  even++;
}

console.log("---count---");
console.log(count);
console.log("---even---");
console.log(even);
