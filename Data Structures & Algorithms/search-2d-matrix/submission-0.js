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
        let index = Math.floor((left+right)/2);
        let row = Math.floor(index / cols);
        let col = index % cols;
        while (left <= right) {
            console.log(matrix[row][col],left,right)
            if (matrix[row][col] == target) {
                return true;
            }
            else if (matrix[row][col] > target) {
                right = index-1;
            }
            else if (matrix[row][col] < target) {
                left = index+1;
            }
            index = Math.floor((left+right)/2);
            row = Math.floor(index / cols);
            col = index % cols;
        }
        return false;
    }
}
