/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const haystack = "";
const needle = "";

var strStr = function (haystack, needle) {
  haystack.includes(needle) ? (x = haystack.indexOf(needle)) : (x = -1);
  return x;
};

console.log(strStr(haystack, needle));
