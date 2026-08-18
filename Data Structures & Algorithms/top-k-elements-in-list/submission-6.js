class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let store = new Map();
        for(let i = 0; i < nums.length; i++ ) {
            store.set(nums[i], (store.get(nums[i]) || 0) + 1)
        }
        let res = [];
        let counter = 0;
        let tmp = [];
        for(const [number, count] of store) {
            tmp.push([number,count]);  
        }
        // console.log(tmp);
        tmp.sort((a,b) => b[1]-a[1]);
        for(let top of tmp) {
            res.push(top[0]);
            counter += 1
            if (counter == k) return res;
        }
    }
}
