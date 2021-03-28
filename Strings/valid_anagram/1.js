/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const s = "anagram";
const t = "nagaram";

var isAnagram = function (s, t) {
  let hash_table_s = {};
  let hash_table_t = {};

  for (let i = 0; i < s.length; i++) {
    let key_s = s.charCodeAt(i);
    let key_t = t.charCodeAt(i);

    // console.log(key_s);
    if (!hash_table_s[key_s]) {
      count_s = 1;
    } else if (hash_table_s[key_s] >= 1) {
      count_s++;
    }
    hash_table_s[key_s] = count_s;

    // console.log(key_t);
    if (!hash_table_t[key_t]) {
      count_t = 1;
    } else if (hash_table_t[key_t] >= 1) {
      count_t++;
    }
    hash_table_t[key_t] = count_t;

    // console.log(hash_table_s);
    // console.log(hash_table_t);
  }

  let s_string = JSON.stringify(hash_table_s);
  let t_string = JSON.stringify(hash_table_t);

  if (s_string == t_string) {
    return true;
  } else {
    return false;
  }
};

console.log(isAnagram(s, t));
