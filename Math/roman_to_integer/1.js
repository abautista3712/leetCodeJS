/**
 * @param {string} s
 * @return {number}
 */

const s = "III";

var romanToInt = function (s) {
  let total = 0;

  if (s.charAt(0) == "I") {
    return (total += 1);
  } else if (s.charAt(0) == "V") {
    return (total += 5);
  } else if (s.charAt(0) == "X") {
    return (total += 10);
  } else if (s.charAt(0) == "L") {
    return (total += 50);
  } else if (s.charAt(0) == "C") {
    return (total += 100);
  } else if (s.charAt(0) == "D") {
    return (total += 500);
  } else if (s.charAt(0) == "M") {
    return (total += 1000);
  }
};

console.log(romanToInt(s));
