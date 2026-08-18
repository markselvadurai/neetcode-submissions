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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head1 = list1;
        let head2 = list2;
        let dummy = new ListNode;
        let chaser = dummy;
        while (head1 && head2) {
            if (head1.val <= head2.val) {
                //point chaser to head1, point head1 to next node
                chaser.next = head1;
                head1 = head1.next;
            } else {
                //point chaser to head2, point head2 to next node
                chaser.next = head2;
                head2 = head2.next;
            }
            chaser = chaser.next;
        }
        chaser.next = head1 ? head1 : head2;
        return dummy.next;
    }
}
