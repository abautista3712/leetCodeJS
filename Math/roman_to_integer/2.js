/**
 * @param {string} s
 * @return {number}
 */

const s = "III";

var romanToInt = function (s) {
  let int_s = [];

  for (let i = 0; i < s.length; i++) {
    int_s[i] = s.charAt(i);
  }
  return int_s;
};

console.log(romanToInt(s));
