/**
 * @param {string} s
 * @return {boolean}
 */

const s = "((";
var isValid = function (s) {
  let orderCache = [];
  let n = s.length;

  if (n % 2 != 0) {
    return false;
  }

  for (let i = 0; i < n; i++) {
    let current_char = s.charAt(i);
    switch (current_char) {
      case "(":
      case "{":
      case "[":
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

  if (orderCache.length == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isValid(s));
