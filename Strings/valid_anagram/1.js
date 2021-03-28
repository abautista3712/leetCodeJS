/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const s = "anagram";
const t = "nagaram";

var isAnagram = function (s, t) {
  let hash_table = {};

  for (let i = 0; i < s.length; i++) {
    let key = s.charCodeAt(i);

    console.log(key);
    if (!hash_table[key]) {
      count = 1;
    } else if (hash_table[key] >= 1) {
      count++;
    }
    hash_table[key] = count;

    console.log(hash_table);
  }
};

isAnagram(s, t);
