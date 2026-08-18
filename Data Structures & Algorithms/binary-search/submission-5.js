class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lastDirection = 0;
        let i = Math.floor(nums.length/2);
        while (i < nums.length && i > -1) {
            console.log(nums[i]);
            if (nums[i] == target) {
                return(i);
            }
            if (nums[i] > target) {
                if (lastDirection == 1) return -1;
                i--;
                lastDirection = -1;
            }
            else if (nums[i] < target) {
                if (lastDirection == -1) return -1;
                i++;
                lastDirection = 1;
            }
        }
        return -1;
    }
}
