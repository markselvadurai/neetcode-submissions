/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        let res = 0;
        function dfs(node, counter) {
            if (!node) {
                res = Math.max(res,counter);
                return;
            }
            console.log(node.val);   
            let newCount = counter;         
            dfs(node.left, newCount + 1);
            dfs(node.right, newCount + 1);
        }
        dfs(root, 0);
        return res;
    }
}
