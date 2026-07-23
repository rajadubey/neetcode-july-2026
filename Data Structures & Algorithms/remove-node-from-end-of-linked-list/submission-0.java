/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int len = 0;
        ListNode current = head;

        while (current != null) {
            current = current.next;
            len += 1;
        }

        int targetIndex = len - n;
        if (targetIndex == 0) return head.next;

        current = head;
        for (int i = 0;i<len; ++i) {
            if ((i + 1) == targetIndex) {
                current.next = current.next.next;
                break;
            }
            current = current.next;
        }
        return head;
    }
}
