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
    public void reorderList(ListNode head) {
        if (head == null || head.next == null) return;


        ListNode i = head, j = head;
        while (i != null && i.next != null) {
            j = j.next;
            i = i.next.next;
        }

        ListNode section = j.next;
        j.next = null;
        ListNode prev = null;

        while (section != null) {
            ListNode tmp = section.next;
            section.next = prev;
            prev = section;
            section = tmp;
        }

        ListNode section2 = head;
        while (prev != null) {
            ListNode tmp1 = section2.next;
            ListNode tmp2 = prev.next;
            section2.next = prev;
            prev.next = tmp1;
            section2 = tmp1;
            prev = tmp2;
        }
    }
}
