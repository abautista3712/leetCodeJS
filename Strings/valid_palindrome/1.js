/**
 * @param {string} s
 * @return {boolean}
 */

const s = "race a car";

var isPalindrome = function (s) {
  // Function to check if alpha-numeric
  const is_alpha_numeric = (char) => {
    if (
      (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) ||
      (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
      (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    ) {
      return true;
    }
    return false;
  };

  // Function to make uppercase characters into lowercase
  const make_lowercase = (char) => {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      return String.fromCharCode(char.charCodeAt(0) + 32);
    } else return char;
  };

  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    // Move pointers to first alpha-numeric character
    if (!is_alpha_numeric(s.charAt(i))) {
      i++;
      console.log(`---i = ${i}---`);
    } else if (!is_alpha_numeric(s.charAt(j))) {
      j--;
      console.log(`---j = ${j}---`);
    } else {
      // Compare lowercase converted characters
      if (make_lowercase(s.charAt(i)) != make_lowercase(s.charAt(j))) {
        return false;
      }
      // Move pointers to next character
      i++;
      j--;
    }
  }
  return true;
};

console.log(isPalindrome(s));
