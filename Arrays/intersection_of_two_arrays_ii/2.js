/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

var intersect = function (nums1, nums2) {
  let intersection = nums1.filter((x) =>
    nums2.includes(x) ? nums2.splice(nums2.indexOf(x), 1) : false
  );

  return intersection;
};

console.log(intersect(nums1, nums2));
