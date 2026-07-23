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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;

        for (let i = 0; i < lists.length; i++) {
            lists[i] = this.internalMergeFn(lists[i], lists[i - 1]);
        }

        return lists[lists.length - 1];
    }

    internalMergeFn(l1, l2) {
        const copy = new ListNode()
        let end = copy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                end.next = l1;
                l1 = l1.next;
            } else {
                end.next = l2;
                l2 = l2.next;
            }
            end = end.next;
        }
        if (l1) {
            end.next = l1;
        }
        if (l2) {
            end.next = l2;
        }
        return copy.next;
    }
}
