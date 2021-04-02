/**
 * @param {string} s
 * @return {boolean}
 */

const s = "race a car";

var isPalindrome = function (s) {
  let letters = [];

  for (let i = 0; i < s.length; i++) {
    let lower_case = String.fromCharCode(s.charCodeAt(i) + 32);

    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      letters.push(lower_case);
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      letters.push(s.charAt(i));
    }
  }

  let i = 0;
  let j = letters.length - 1;

  while (i < j) {
    if (letters[i] == letters[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(s));
