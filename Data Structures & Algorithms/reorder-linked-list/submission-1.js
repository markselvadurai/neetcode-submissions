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
     * @return {void}
     */
    reorderList(head) {
        if (!head.next) return;
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let midNode = slow.next;
        let top = head;
        slow.next = null;
        let midHead = midNode;
        let tail = null;

        while (midHead) {
            let next = midHead.next;
            midHead.next = tail;
            tail = midHead;
            midHead = next;
        }

        while (top && tail) {
            let next = top.next;
            let next2 = tail.next;
            top.next = tail;
            tail.next = next;
            top = next;
            tail = next2;
        }
    }
}
