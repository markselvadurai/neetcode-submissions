class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // nums=[1]
    findMin(nums) {
        // nums=[2,3,[1]
        let left = 0;
        let right = nums.length-1;
        while (left <= right) {
            let middle = Math.round((left+right)/2);
            if ( left == right ) return nums[middle];
            if (nums[left] < nums[right]) {
                return nums[left];
            }
            if (nums[left] < nums[middle]) {
                left = middle+1;
            }
            else if(nums[left] > nums[middle]) {
                left ++;
                right = middle;
            }
            
        }
        return false;

    }
}
