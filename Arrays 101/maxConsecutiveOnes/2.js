/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let onesCount = 0
    let maxCount = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            onesCount += 1
            if (onesCount > maxCount) {
                maxCount = onesCount
            }
        }
        else if (nums[i] == 0) {
            onesCount = 0
        }
    }
    return maxCount
};