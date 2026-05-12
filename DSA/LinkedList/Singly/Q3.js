class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function findMiddle(head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow; // slow is at middle
}
