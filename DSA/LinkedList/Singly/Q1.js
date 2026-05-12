class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null,
    curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
