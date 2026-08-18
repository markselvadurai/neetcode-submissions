class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let res = right;
        console.log(right);
        while (left <= right) {
            let k = Math.round((left+right)/2);
            let hours = h;
            
            for (const pile of piles) {
                hours -= Math.ceil(pile/k);
            }
            console.log(k, left, right, hours);
            if (hours < 0) {
                left = k+1;
            }
            if (hours >= 0) {
                res = Math.min(k,res);
                right = k-1;
            }
        }
        return res;
    }
}
