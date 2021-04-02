/**
 * @param {string} s
 * @return {boolean}
 */

const s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  // for (let i = 0; i < s.length; i++) {

  // Function to check if alpha-numeric
  const is_alpha_numeric = (char) => {
    if (
      (s.charCodeAt(char) >= 48 && s.charCodeAt(char) <= 57) ||
      (s.charCodeAt(char) >= 65 && s.charCodeAt(char) <= 90) ||
      (s.charCodeAt(char) >= 97 && s.charCodeAt(char) <= 122)
    ) {
      return true;
    }
    // // Handle Uppercase
    // else if (s.charCodeAt(char) >= 65 && s.charCodeAt(char) <= 90) {
    //   return lower_case
    // }
    // // Handle Lowercase
    // else if (s.charCodeAt(char) >= 97 && s.charCodeAt(char) <= 122) {
    //   return s.charAt(char)
    // }
  };

  const make_lowercase = (char) => {
    return String.fromCharCode(s.charCodeAt(char) + 32);
  };
  // }

  // let i = 0;
  // let j = s.length - 1;

  let char = s.charAt(0);
  // while (i < j) {
  if (is_alpha_numeric(char)) {
    console.log("Character is alpha-numeric");
  } else {
    console.log("Character is NOT alpha-numeric");
  }
  // if (characters[i] == characters[j]) {
  //     i++;
  //     j--;
  //   } else {
  //     return false;
  //   }
  // }
  // return true;
  // }
};

console.log(isPalindrome(s));
