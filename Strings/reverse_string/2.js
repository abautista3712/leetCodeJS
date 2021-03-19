/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const s = ["h", "e", "l", "l", "o"];

var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    let tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;
    i++;
    j--;
  }
  console.log(s);
};

reverseString(s);
