/**
 * @param {string} s
 * @return {boolean}
 */

const s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  // console.log(s.charCodeAt(1));
  // console.log(s);
  for (let i = 0; i < s.length; i++) {
    if (
      (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) ||
      (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122)
    ) {
      console.log(s.charAt(i));
    }
  }
};

console.log(isPalindrome(s));
