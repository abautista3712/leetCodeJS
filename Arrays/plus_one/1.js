/**
 * @param {number[]} digits
 * @return {number[]}
 */

const digits = [9];

var plusOne = function (digits) {
  let n = digits.length - 1;
  if (digits[n] != 9) {
    digits[n] = digits[n] + 1;
  } else {
    digits[n] = 0;
    while (digits[n - 1] === 9) {
      digits[n - 1] = 0;
      n--;
    }
    if (n > 0) {
      digits[n - 1] = digits[n - 1] + 1;
    } else {
      digits[0] = 1;
      digits.push(0);
    }
  }
  return digits;
};

console.log(plusOne(digits));
