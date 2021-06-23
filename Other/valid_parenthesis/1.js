/**
 * @param {string} s
 * @return {boolean}
 */

const s = "{[]}";
var isValid = function (s) {
  let isOpen = false;
  let orderCache = [];

  for (let i = 0; i < s.length; i++) {
    let current_char = s.charAt(i);
    switch (current_char) {
      case "(":
      case "{":
      case "[":
        isOpen = true;
        orderCache.push(current_char);
        break;
      case ")":
        if (orderCache[orderCache.length - 1] == "(") {
          orderCache.pop();
        } else {
          return false;
        }
        break;
      case "}":
        if (orderCache[orderCache.length - 1] == "{") {
          orderCache.pop();
        } else {
          return false;
        }
        break;
      case "]":
        if (orderCache[orderCache.length - 1] == "[") {
          orderCache.pop();
        } else {
          return false;
        }
        break;
    }
  }
  return true;
};
console.log(isValid(s));
