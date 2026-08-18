class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let left = 0;
        let right = heights.length-1;
        while ( left < right ) {
            let currentArea = (Math.min(heights[left],heights[right]) * (right-left));
            console.log(currentArea);
            res = Math.max(currentArea,res);
            if (heights[left] < heights[right]) {
                left ++;
            } else {
                right--;
            }
        }
        return res;
    }
}
