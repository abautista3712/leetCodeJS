/**
 * @param {number} n
 * @return {string}
 */
const n = 5;

var countAndSay = function (n) {
  let concat_value = "";
  let value = JSON.stringify(11121);
  n = value.length;
  let how_many = 1;

  if (n == 1) {
    return 1;
  }

  for (let i = 0; i < n; i++) {
    if (value[i] == value[i + 1]) {
      how_many++;
    } else {
      concat_value = JSON.stringify(how_many).concat("", value[i]);
      return concat_value;
    }
  }

  // return concat_value;

  // let i = 0;
};

console.log(countAndSay(n));
