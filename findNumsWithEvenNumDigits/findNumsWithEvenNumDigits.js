// Testing Example 1
const nums = [12, 345, 2, 6, 7896];
let count = 0;

// Counting digits from nums[0]
if (Math.floor(nums[0] / 1) !== 0) {
  console.log("---Math.floor(nums[0] / 1)---");
  console.log(Math.floor(nums[0] / 1));
  count++;
}
if (Math.floor(nums[0] / 10) !== 0) {
  console.log("---Math.floor(nums[0] / 10)---");
  console.log(Math.floor(nums[0] / 10));
  count++;
}
if (Math.floor(nums[0] / 100) !== 0) {
  console.log("---Math.floor(nums[0] / 100)---");
  console.log(Math.floor(nums[0] / 100));
  count++;
}
if (Math.floor(nums[0] / 1000) !== 0) {
  console.log("---Math.floor(nums[0] / 1000)---");
  console.log(Math.floor(nums[0] / 1000));
  count++;
}
if (Math.floor(nums[0] / 10000) !== 0) {
  console.log("---Math.floor(nums[0] / 10000)---");
  console.log(Math.floor(nums[0] / 10000));
  count++;
}
if (Math.floor(nums[0] / 100000) !== 0) {
  console.log("---Math.floor(nums[0] / 100000)---");
  console.log(Math.floor(nums[0] / 100000));
  count++;
}
console.log("---count---");
console.log(count);
