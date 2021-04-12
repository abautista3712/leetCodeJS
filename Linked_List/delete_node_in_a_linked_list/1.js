/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

const head = [4, 5, 1, 9];
const node = 5;

var deleteNode = function (node) {
  let node_index = 0;

  for (let i = 0; i < head.length; i++) {
    if (head[i] == node) {
      node_index = i;
    }
  }
  head.splice(1, node_index);
  return head;
};

console.log(deleteNode(node));
