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
  return nums1;
};

console.log(merge(nums1, m, nums2, n));
