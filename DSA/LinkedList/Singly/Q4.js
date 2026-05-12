class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function removeNthFromEnd(head, n) {
  const dummy = new Node(0);
  dummy.next = head;
  let fast = dummy,
    slow = dummy;

  for (let i = 0; i <= n; i++) fast = fast.next;

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}
