function reverseDoublyLL(head) {
  let curr = head,
    prev = null;
  while (curr) {
    // Swap next and prev pointers
    [curr.prev, curr.next] = [curr.next, curr.prev];
    prev = curr;
    curr = curr.prev; // move forward (was next)
  }
  return prev; // new head
}
