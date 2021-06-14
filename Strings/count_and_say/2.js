/**
 * @param {number} n
 * @return {string}
 */
const n = 2;

var countAndSay = function (n) {
  let output_string = "1";

  if (n == 1) {
    return output_string;
  }

  for (let i = 2; i <= n; i++) {
    let str_length = output_string.length;
    let hash = {};

    console.log(`output_string = ${output_string}`);

    for (let j = 0; j < str_length; j++) {
      let key = output_string.charAt(j);
      if (!hash[key]) {
        hash[key] = 1;
      } else {
        hash[key]++;
      }
    }

    console.log(hash);

    // let count = hash[key].toString();
    // let value = key;

    // output_string = count.concat(value);
  }

  return output_string;
};

console.log(countAndSay(n));
