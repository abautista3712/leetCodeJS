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
  let i = 0;
  let j = 0;

  while (i < m + n) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      let tmp = nums1[i];
      nums1[i] = nums2[j];
      nums2[j] = tmp;
    }
    if (i > m) {
      nums1[i] = nums2[j];
      j++;
    }
  }
  return nums1;
};

console.log(merge(nums1, m, nums2, n));
