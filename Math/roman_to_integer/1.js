/**
 * @param {string} s
 * @return {number}
 */

const s = "III";

var romanToInt = function (s) {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "I") {
      total += 1;
    } else if (s.charAt(i) == "V") {
      total += 5;
    } else if (s.charAt(i) == "X") {
      total += 10;
    } else if (s.charAt(i) == "L") {
      total += 50;
    } else if (s.charAt(i) == "C") {
      total += 100;
    } else if (s.charAt(i) == "D") {
      total += 500;
    } else if (s.charAt(i) == "M") {
      total += 1000;
    }
  }
  return total;
};

console.log(romanToInt(s));
