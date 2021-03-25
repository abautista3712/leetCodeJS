/**
 * @param {string} s
 * @return {number}
 */

const s = "leetcode";

var firstUniqChar = function (s) {
  // Hash Table
  let hash_table = {};

  for (let i = 0; i < s.length; i++) {
    let hash_key = s.charAt(i);
    let hash_value = s.charCodeAt(i);

    hash_table[hash_key] = hash_value;
    console.log(hash_table);
  }
  // let letter = s.charAt(0);
  // hash_table. = "Test";
  // console.log(hash_table);
  // console.log(s.charCodeAt(2));
  // Read each letter
  // Register new letters / Increment old letters
  // Return index of letter that only shows once
};

console.log(firstUniqChar(s));
