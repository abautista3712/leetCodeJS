/**
 * @param {number} n
 * @return {string}
 */
const n = 3;

var countAndSay = function (n) {
  let output_string = "1";

  if (n == 1) {
    return output_string;
  }

  for (let i = 2; i <= n; i++) {
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

    let count = hash.count.toString();
    let value = hash.value;

    output_string = count.concat(value);
  }

  return output_string;
};

console.log(countAndSay(n));
