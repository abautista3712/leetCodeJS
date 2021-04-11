/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nums1 = [1, 2, 2, 1];
const nums2 = [2];

var intersect = function (nums1, nums2) {
  let filteredArray = nums1.filter((x) => nums2.includes(x));

  if (nums1.length < nums2.length) {
    while (nums1.length < filteredArray.length) {
      filteredArray.pop();
    }
  } else if (nums1.length > nums2.length) {
    while (nums2.length < filteredArray.length) {
      filteredArray.pop();
    }
  }
  return filteredArray;
};

console.log(intersect(nums1, nums2));
