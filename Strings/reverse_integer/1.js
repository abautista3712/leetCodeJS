/**
 * @param {number} x
 * @return {number}
 */

const x = -123;

var reverse = function (x) {
  let buffer = [];
  let last_digit = 0;
  let is_negative = false;

  if (x == 0) {
    return x;
  } else if (x < 0) {
    is_negative = true;
  }

  x = Math.abs(x);

  while (x > 0) {
    last_digit = x % 10;
    buffer.push(last_digit);
    x = Math.floor(x / 10);
  }

  x = parseInt(buffer.join(""));
  if (is_negative == true) {
    x = -x;
  }
  return x;
};

console.log(reverse(x));
