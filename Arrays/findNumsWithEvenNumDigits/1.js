// ---Testing Example 1---
const nums = [12, 345, 2, 6, 7896];
// Expected Output: 2
// Tested Output: 2

// ---Testing Example 2---
// const nums = [555, 901, 482, 1771];
// Expected Output: 1
// Tested Output: 1

// ---Test Case 3---
// const nums = [0];

const findNumbers = (nums) => {
  let count = 0;
  let even = 0;

  for (let a = 0; a < nums.length; a++) {
    // console.log("Checking if number of digits is even...");
    if (count > 0 && count % 2 === 0) {
      //   console.log("Number has even digits. Adding 1 to 'even'...");
      even++;
    }
    // console.log("Check complete...");
    // console.log("---even---");
    // console.log(even);
    // console.log("Resetting 'count' to 0...");
    // console.log("---count---");
    count = 0;
    // console.log(count);
    for (let b = 0; b < 6; b++) {
      if (Math.floor(nums[a] / Math.pow(10, b)) !== 0) {
        // console.log(`---Math.floor(nums[${a}] / Math.pow(10, ${b}))---`);
        // console.log(Math.floor(nums[a] / Math.pow(10, b)));
        // console.log("Adding 1 to 'count'...");
        count++;
        // console.log("---count---");
        // console.log(count);
      }
    }
  }

  //   console.log("Final check if number of digits is even...");
  if (count > 0 && count % 2 === 0) {
    // console.log("Number has even digits. Adding 1 to 'even'...");
    even++;
  }
  //   console.log("Check complete...");

  //   console.log("---final count---");
  //   console.log(count);
  //   console.log("---final even---");
  //   console.log(even);
  return even;
};
findNumbers(nums);
