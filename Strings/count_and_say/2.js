/**
 * @param {number} n
 * @return {string}
 */
const n = 4;

var countAndSay = function (n) {
  // Base Case
  if (n == 1) {
    return 1;
  }

  // Read
  // -Create number variable to keep track of current value being read
  let read_value;

  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      read_value = 1;
    }
  }
  // Say
  // -Convert number variable to "say" value
  // Write
  // -Convert number to string and return
};

console.log(countAndSay(n));
