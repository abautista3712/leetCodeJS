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

const head = [-3, 5, -99];
const node = -3;

var deleteNode = function (node) {
  let node_index = 0;

  for (let i = 0; i < head.length; i++) {
    if (head[i] == node) {
      node_index = i;
    }
  }
  head.splice(node_index, 1);
  return head;
};

console.log(deleteNode(node));
