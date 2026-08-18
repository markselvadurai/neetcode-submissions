class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lastDirection = 0;
        let left = 0;
        let right = nums.length-1;
        let i = Math.floor((left+right)/2);
        while ( i >= left && i <= right ) {
            console.log(nums[i],left,right);
            if (nums[i] == target) return i;
            if (nums[i] > target) {
                right = i-1;
                // i /= 2;
                // Math.floor(right/2)
            }
            if (nums[i] < target) {
                left = i+1;
            }
            i = Math.floor((left+right)/2);
        }
        return -1;
    }
}
