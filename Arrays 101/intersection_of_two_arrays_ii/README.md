# Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

## Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

## Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

### Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

#### Follow up:

What if the given array is already sorted? How would you optimize your algorithm?

> If nums1 is sorted, remove unsorted elements from nums2

What if nums1's size is small compared to nums2's size? Which algorithm is better?

> Use nums1 as a "key" to search nums2

What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

> Using nums1 as a "key", load as many elements as possible from nums2. Search nums2 through nums2.length - num1.length. Keep end "overlap" on next load in case intersection happens from elements between two loads.
