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
    diameterOfBinaryTree(root) {
        const result = [0];
        this.dfs(root, result);
        return result[0];
    }
    dfs(root, result) {
        if (root === null) {
            return 0;
        }
        const left = this.dfs(root.left, result);
        const right = this.dfs(root.right, result);
        result[0] = Math.max(result[0], left + right);
        return 1 + Math.max(left, right);
    }
}
