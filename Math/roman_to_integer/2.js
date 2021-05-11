/**
 * @param {string} s
 * @return {number}
 */

const s = "III";

var romanToInt = function (s) {
  let int_s = [];

  for (let i = 0; i < s.length; i++) {
    switch (s.charAt(0)) {
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
  return int_s;
};

console.log(romanToInt(s));
