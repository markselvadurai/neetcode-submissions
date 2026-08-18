class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */ 
    // [3,4,[5,[6,1],2]
    // [4,5,0,1,2,3]
    findMin(nums) {
        let left = 0;
        let right = nums.length-1;
        while (left <= right) {
            let middle = Math.floor((left+right)/2);
            if (nums[left] <= nums[right]) return nums[left];
            if (nums[left] <= nums[middle]) {
                left = middle + 1;
            } else {
                right = middle;
            } 

        }
        return false;
    }
}
