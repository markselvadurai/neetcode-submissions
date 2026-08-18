class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let store = new Set(nums);
        let res = 0;
        for (let num of store) {
            let count = 0;
            if (!store.has(num-1)) {
                while (store.has(num+count)) {
                    count += 1;
                }
                res = Math.max(res,count);
            }
        }
        return res;
    }
}
