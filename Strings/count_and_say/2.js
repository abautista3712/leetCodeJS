/**
 * @param {number} n
 * @return {string}
 */
const n = 2;

var countAndSay = function (n) {
  // Read
  // -Create number variable to keep track of current value being read
  let output_string = "1";

  for (let i = 1; i <= n; i++) {
    if (n == 1) {
      return output_string;
    }

    output_string = "11";

    let str_length = output_string.length;

    let hash = {};

    for (let j = 0; j < str_length; j++) {
      if (hash.value == output_string.charAt(j)) {
        hash.count++;
      } else {
        hash.value = output_string.charAt(j);
        hash.count = 1;
      }
    }
    console.log(hash);
  }

  // Say
  // -Convert number variable to "say" value
  // Write
  // -Convert number to string and return
};

console.log(countAndSay(n));
