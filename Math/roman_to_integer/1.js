/**
 * @param {string} s
 * @return {number}
 */

const s = "III";

var romanToInt = function (s) {
  let total = 0;

  if (s.charAt(0) == "I") {
    total += 1;
  } else if (s.charAt(0) == "V") {
    total += 5;
  } else if (s.charAt(0) == "X") {
    total += 10;
  } else if (s.charAt(0) == "L") {
    total += 50;
  } else if (s.charAt(0) == "C") {
    total += 100;
  } else if (s.charAt(0) == "D") {
    total += 500;
  } else if (s.charAt(0) == "M") {
    total += 1000;
  }
};

console.log(romanToInt(s));
