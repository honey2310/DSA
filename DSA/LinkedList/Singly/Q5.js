class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function mergeSortedLists(l1, l2) {
  const dummy = new Node(0);
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummy.next;
}
