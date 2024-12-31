/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fastHead = head;

  while (fastHead && fastHead.next) {
    fastHead = fastHead.next.next
    head = head.next
  }

  return head;
};