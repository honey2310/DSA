class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true; // cycle detected
  }
  return false;
}
