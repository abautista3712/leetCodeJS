/**
 * @param {string} s
 * @return {number}
 */

const s = "42";
var myAtoi = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) != " ") {
      return s.charAt(i);
    }
  }
};

console.log(myAtoi(s));
