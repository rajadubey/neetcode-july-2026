/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let current = head;
        let groupCount = 0;
        while (current && groupCount < k) {
            current = current.next;
            ++groupCount;
        }


        if (groupCount === k) {
            current = this.reverseKGroup(current, k);
            while (groupCount > 0) {
                let tmp = head.next;
                head.next = current;
                current = head;
                head = tmp;
                groupCount--;

            }

            head = current;
        }

        return head;

    }
}
