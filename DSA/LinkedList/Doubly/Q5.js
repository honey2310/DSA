function removeDuplicatesDLL(head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      const dup = curr.next;
      curr.next = dup.next;
      if (dup.next) dup.next.prev = curr;
      // dup is now disconnected
    } else {
      curr = curr.next;
    }
  }
  return head;
}
