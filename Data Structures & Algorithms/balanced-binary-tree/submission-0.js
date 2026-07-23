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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return !0;
        const hl = this.calculateHeight(root.left);
        const hr = this.calculateHeight(root.right);
        if (Math.abs(hl - hr) > 1) return false;
        const lb = this.isBalanced(root.left);
        const rb = this.isBalanced(root.right);
        return lb && rb;
    }

    calculateHeight(root) {
        if (!root) return 0;
        const hl = this.calculateHeight(root.left);
        const hr = this.calculateHeight(root.right);
        return Math.max(hl, hr) + 1;
    }
}
