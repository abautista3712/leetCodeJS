/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const nums1 = [1, 5, 6, 0, 0, 0];
const m = 3;
const nums2 = [2, 3, 4];
const n = 3;

var merge = function (nums1, m, nums2, n) {
  while (nums1.length > m) {
    nums1.pop();
  }

  nums1.push(...nums2);

  for (let i = 1; i < nums1.length; i++) {
    let current_value = nums1[i];
    let j = i - 1;
    while (j >= 0 && nums1[j] > current_value) {
      nums1[j + 1] = nums1[j];
      j--;
    }
    nums1[j + 1] = current_value;
  }
  return nums1;
};

console.log(merge(nums1, m, nums2, n));
