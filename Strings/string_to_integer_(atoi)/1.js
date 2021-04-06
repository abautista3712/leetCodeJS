/**
 * @param {string} s
 * @return {number}
 */

const s = "-91283472332";
var myAtoi = function (s) {
  if (isNaN(parseInt(s))) {
    return 0;
  } else if (parseInt(s) < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  } else if (parseInt(s) > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else return parseInt(s);
};

console.log(myAtoi(s));
