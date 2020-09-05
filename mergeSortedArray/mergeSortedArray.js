// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */

const nums1 = [1, 2, 3, 0, 0, 0];
const m = nums1.length;
const nums2 = [2, 5, 6];
const n = nums2.length;

const merge = (nums1, m, nums2, n) => {
  let i = m;
  while (i >= 0) {
    if (nums1[i] === 0) {
      nums1.splice(i, 1);
    }
    i--;
  }
};

merge(nums1, m, nums2, n);
console.log("---nums1 after function call---");
console.log(nums1);
