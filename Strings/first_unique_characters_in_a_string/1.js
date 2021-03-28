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
    let letter = s.charAt(i);

    if (!hash_table[key]) {
      hash_table[key] = {
        letter: letter,
        index_found: [i],
      };
    } else if (hash_table[key].index_found.length >= 1) {
      let n = hash_table[key].index_found.length;

      hash_table[key].index_found[n] = i;
    }
  }
  console.log(hash_table);
};

console.log(firstUniqChar(s));
