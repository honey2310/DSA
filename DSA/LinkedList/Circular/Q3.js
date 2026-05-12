function traverseCircular(tail) {
  if (!tail) return [];
  const result = [];
  let curr = tail.next; // start from head

  do {
    result.push(curr.val);
    curr = curr.next;
  } while (curr !== tail.next);

  return result;
}
