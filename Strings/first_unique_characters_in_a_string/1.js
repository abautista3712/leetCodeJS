/**
 * @param {string} s
 * @return {number}
 */

const s = "leetcode";

var firstUniqChar = function (s) {
  // Hash Table
  let hash_table = {};

  for (let i = 0; i < s.length; i++) {
    let key = s.charCodeAt(i);

    console.log(key);
    if (!hash_table[key]) {
      count = 1;
    } else if (hash_table[key] >= 1) {
      count++;
    }
    hash_table[letter] = count;
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
