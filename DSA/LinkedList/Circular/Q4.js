function splitCircular(head) {
  if (!head || head.next === head) return [head, null];

  let slow = head,
    fast = head;
  while (fast.next !== head && fast.next.next !== head) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast.next.next === head) fast = fast.next;

  const head1 = head;
  const head2 = slow.next;

  // Fix circular links
  let temp = head2;
  while (temp.next !== head) temp = temp.next;
  temp.next = head2; // second half circular
  slow.next = head1; // first half circular

  return [head1, head2];
}
