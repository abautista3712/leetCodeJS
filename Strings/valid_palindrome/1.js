/**
 * @param {string} s
 * @return {boolean}
 */

const s = "      A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  // for (let i = 0; i < s.length; i++) {

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

  const make_lowercase = (char) => {
    return String.fromCharCode(s.charCodeAt(char) + 32);
  };
  // }

  let i = 0;
  let j = s.length - 1;

  // let forward_char = s.charAt(i);
  // let reverse_char = s.charAt(j);

  console.log(is_alpha_numeric(" "));

  // while (i <= j) {
  // if (is_alpha_numeric(s.charAt(i)) == false) {
  //   ("Test");
  // }
  // if (is_alpha_numeric(forward_char)) {
  //   if (
  //     s.charCodeAt(forward_char) >= 65 &&
  //     s.charCodeAt(forward_char) <= 90
  //   ) {
  //     return make_lowercase(forward_char);
  //   } else {
  //     return forward_char;
  //   }
  // } else {
  //   console.log("Character is NOT alpha-numeric");
  // }
  // console.log(forward_char);
  // }
  // return console.log(forward_char);
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
