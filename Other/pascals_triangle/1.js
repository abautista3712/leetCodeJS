/**
 * @param {number} numRows
 * @return {number[][]}
 */
const numRows = 5;
var generate = function (numRows) {
  let arr = [];

  for (let i = 0; i < numRows; i++) {
    let sub_arr = [];
    for (let j = 0; j <= i; j++) {
      sub_arr.push(1);
    }
    arr.push(sub_arr);
  }

  return arr;
};
console.log(generate(numRows));
