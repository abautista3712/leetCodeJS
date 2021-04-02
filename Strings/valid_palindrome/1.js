/**
 * @param {string} s
 * @return {boolean}
 */

const s = "0P";

var isPalindrome = function (s) {
  let characters = [];

  for (let i = 0; i < s.length; i++) {
    let lower_case = String.fromCharCode(s.charCodeAt(i) + 32);

    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      characters.push(s.charAt(i));
    } else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      characters.push(lower_case);
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      characters.push(s.charAt(i));
    }
  }

  console.log(characters);

  let i = 0;
  let j = characters.length - 1;

  while (i < j) {
    if (characters[i] == characters[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(s));
