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
     * @return {TreeNode}
     */
    invertTree(root) {
        let dummy = root;
        function invert(root) {
            if (!root) return root;
            console.log(root.val);
            let right = invert(root.left);
            let left = invert(root.right)
            root.right = right; 
            root.left = left;
            return root;
        }
        invert(root);
        return dummy;
    }
}
