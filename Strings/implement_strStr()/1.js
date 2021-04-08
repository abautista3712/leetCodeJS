/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const haystack = "hello";
const needle = "ll";

var strStr = function (haystack, needle) {
  let hash_table = {};

  for (let i = 0; i < haystack.length; i++) {
    hash_table.haystack = [];
    hash_table.needle = [];
  }
  // let haystack_arr = [];
  // let needle_arr = [];

  // for (let i = 0; i < haystack.length; i++) {
  //   haystack_arr.push(haystack.charAt(i));
  // }
  // for (let j = 0; j < needle.length; j++) {
  //   needle_arr.push(needle.charAt(j));
  // }

  // let filteredArr = haystack_arr.filter((x) => needle_arr.includes(x));
  // return filteredArr;
};

console.log(strStr(haystack, needle));
