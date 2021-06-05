/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

var intersect = function (nums1, nums2) {
  let filteredArray = nums1.filter((x) => nums2.includes(x));
  console.log(filteredArray);
};

console.log(intersect(nums1, nums2));
