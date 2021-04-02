/**
 * @param {string} s
 * @return {boolean}
 */

const s = "A man, a plan, a canal: Panama";

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
  console.log(letters);
};

console.log(isPalindrome(s));
