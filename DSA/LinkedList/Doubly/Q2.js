function deleteNode(head, val) {
  let curr = head;
  while (curr) {
    if (curr.val === val) {
      if (curr.prev) curr.prev.next = curr.next;
      else head = curr.next; // deleting head

      if (curr.next) curr.next.prev = curr.prev;
      return head;
    }
    curr = curr.next;
  }
  return head; // not found
}
