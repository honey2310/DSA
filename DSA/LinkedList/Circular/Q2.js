function deleteFromCircular(tail, val) {
  if (!tail) return null;

  let curr = tail.next,
    prev = tail; // start from head

  do {
    if (curr.val === val) {
      if (curr === tail && curr.next === tail) return null; // only node

      prev.next = curr.next;
      if (curr === tail) tail = prev; // deleted tail
      return tail;
    }
    prev = curr;
    curr = curr.next;
  } while (curr !== tail.next);

  return tail; // not found
}
