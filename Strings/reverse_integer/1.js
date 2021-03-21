/**
 * @param {number} x
 * @return {number}
 */

const x = 120;

var reverse = function (x) {
  let buffer = [];
  let last_digit = 0;

  if (x == 0) {
    return x;
  }

  while (x > 0) {
    last_digit = x % 10;
    buffer.push(last_digit);
    x = Math.floor(x / 10);
  }

  x = parseInt(buffer.join(""));
  return x;
};

console.log(reverse(x));
