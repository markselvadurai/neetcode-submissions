class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];

        nums.sort((a,b) => 
            a - b
        );
        for (let i = 0; i < nums.length-2; i++)
        {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            };
            let target = -nums[i];
            let left = i+1;
            let right = nums.length-1;
            while ( left < right ) {
                let curr = nums[left] + nums[right];
                if (curr == target) {
                    res.push([nums[i],nums[left],nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                }
                if (curr < target) left ++;
                if (curr > target) right --;
            }
        }
        return res;
    }
}
