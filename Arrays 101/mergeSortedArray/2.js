// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */

const nums1 = [-1, -1, 0, 0, 0, 0],
  m = 4,
  nums2 = [-1, 0],
  n = 2;

var merge = function (nums1, m, nums2, n) {
  let i = nums1.length - 1;
  while (i >= 0 && nums1[i] == 0) {
    nums1.pop();
    i--;
  }

  while (nums2.length) {
    nums1.push(nums2.pop());
  }

  for (let j = 0; j < nums1.length; j++) {
    let currentVal = nums1[j];
    let k = j - 1;
    while (k >= 0 && nums1[k] > currentVal) {
      nums1[k + 1] = nums1[k];
      k--;
    }
    nums1[k + 1] = currentVal;
  }

  const final_length = m + n;

  while (nums1.length < final_length) {
    nums1.push(0);
  }
  while (nums1.length > final_length) {
    nums1.pop();
  }

  return nums1;
};

merge(nums1, m, nums2, n);
