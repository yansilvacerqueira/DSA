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
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next;  // Store next node
    current.next = prev;          // Reverse the link
    prev = current;               // Move prev one step forward
    current = nextTemp;           // Move current one step forward
  }

  return prev;  // prev is the new head
};