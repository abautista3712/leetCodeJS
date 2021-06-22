/**
 * @param {string} s
 * @return {boolean}
 */

const s = "()";
var isValid = function (s) {
  let isOpen = false;
  let orderCache = [];

  for (let i = 0; i < s.length; i++) {
    if ((s.charAt(i) == "(") | (s.charAt(i) == "{") | (s.charAt(i) == "[")) {
      isOpen = true;
      orderCache.push(s.charAt(i));
    } else {
      let close_bracket = s.charAt(i);
      let j = orderCache.length - 1;
      while (j >= 0) {
        switch (close_bracket) {
          case ")":
            if (orderCache[j] == "(") {
              orderCache.pop();
            } else {
              console.log("Incorrect order");
              return false;
            }
            break;
          case "}":
            if (orderCache[j] == "{") {
              orderCache.pop();
            } else {
              console.log("Incorrect order");
              return false;
            }
            break;
          case "]":
            if (orderCache[j] == "[") {
              orderCache.pop();
            } else {
              console.log("Incorrect order");
              return false;
            }
            break;
          default:
            break;
        }
        j--;
      }
    }
  }
  return true;

  //   for (let i = s.length - 1; i >= 0; i--){
  // if ()
  //   }
  //   return orderCache;
};
console.log(isValid(s));
