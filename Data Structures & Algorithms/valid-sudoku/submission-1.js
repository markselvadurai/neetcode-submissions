class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board.length; col++) {
                if (board[row][col] == '.') {
                    continue;
                }
                if (rows[row].has(board[row][col])) {
                    return false;
                }
                if (cols[col].has(board[row][col])) {
                    return false;
                }
                const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
                if (boxes[boxIndex].has(board[row][col])) {
                    return false;
                }
                cols[col].add(board[row][col]);
                rows[row].add(board[row][col]);
                boxes[boxIndex].add(board[row][col]);
            }
        }
        return true;
    }
}
