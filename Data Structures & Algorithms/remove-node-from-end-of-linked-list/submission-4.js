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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode();
        dummy.next = head;
        let fast = dummy;
        let slow = dummy;
        if (!head.next) return(null);
        let i = 0;
        while (i < n && fast.next) {
            fast = fast.next;
            i++;
        }
        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }
        if (slow.next) slow.next = slow.next.next; 
        return dummy.next;
    }
}
