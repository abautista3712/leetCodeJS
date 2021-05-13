/**
 * @param {string} s
 * @return {number}
 */

const s = "MCMXCIV";

var romanToInt = function (s) {
  let int_s = [];

  for (let i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
      case "I":
        int_s[i] = 1;
        break;
      case "V":
        int_s[i] = 5;
        break;
      case "X":
        int_s[i] = 10;
        break;
      case "L":
        int_s[i] = 50;
        break;
      case "C":
        int_s[i] = 100;
        break;
      case "D":
        int_s[i] = 500;
        break;
      case "M":
        int_s[i] = 1000;
        break;
      default:
        "Character is not a valid roman numeral";
        break;
    }
  }

  let total = 0;
  for (let i = 0; i < int_s.length; i++) {
    if (int_s[i] == 1) {
      if (int_s[i + 1] == 5 || int_s[i + 1] == 10) {
        total -= int_s[i];
      } else {
        total += int_s[i];
      }
    } else if (int_s[i] == 10) {
      if (int_s[i + 1] == 50 || int_s[i + 1] == 100) {
        total -= int_s[i];
      } else {
        total += int_s[i];
      }
    } else if (int_s[i] == 100) {
      if (int_s[i + 1] == 500 || int_s[i + 1] == 1000) {
        total -= int_s[i];
      } else {
        total += int_s[i];
      }
    } else total += int_s[i];
  }
  return total;
};

console.log(romanToInt(s));
