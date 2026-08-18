class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let store = new Set(nums);
        let res = 0
        for (let num of store) {
            if (!store.has(num-1)) {
                let counter = 1
                while (store.has(num + counter)) {
                    counter += 1
                }
                res = Math.max(counter,res);
            }
        }
        return res;
    }
}
