/**
 * @param {string} s
 * @return {number}
 */

const s = "words and 987";
var myAtoi = function (s) {
  if (isNaN(parseInt(s))) {
    return 0;
  }
  return parseInt(s);
};

console.log(myAtoi(s));
