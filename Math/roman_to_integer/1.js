/**
 * @param {string} s
 * @return {number}
 */

const s = "MCMXCIV";

var romanToInt = function (s) {
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "I") {
      if (s.charAt(i + 1) == "V" || s.charAt(i + 1) == "X") {
        total -= 1;
      } else {
        total += 1;
      }
    } else if (s.charAt(i) == "V") {
      total += 5;
    } else if (s.charAt(i) == "X") {
      if (s.charAt(i + 1) == "L" || s.charAt(i + 1) == "C") {
        total -= 10;
      } else {
        total += 10;
      }
    } else if (s.charAt(i) == "L") {
      total += 50;
    } else if (s.charAt(i) == "C") {
      if (s.charAt(i + 1) == "D" || s.charAt(i + 1) == "M") {
        total -= 100;
      } else {
        total += 100;
      }
    } else if (s.charAt(i) == "D") {
      total += 500;
    } else if (s.charAt(i) == "M") {
      total += 1000;
    }
  }
  return total;
};

console.log(romanToInt(s));
