class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let left = 0;
        let right = (rows * cols)-1;

        while (left <= right) {
            let index = Math.floor((left+right)/2);
            let row = Math.floor(index / cols);
            let col = index % cols;
            let val = matrix[row][col];
            if (val == target) {
                return true;
            }
            else if (val > target) {
                right = index-1;
            }
            else if (val < target) {
                left = index+1;
            }
        }
        return false;
    }
}
