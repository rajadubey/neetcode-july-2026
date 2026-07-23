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
    public boolean hasCycle(ListNode head) {
        ListNode i = head, j = head;
        while (i != null && i.next != null) {
            i = i.next.next;
            j = j.next;
            if (i == j) return true;
        }
        return false;
    }
}
