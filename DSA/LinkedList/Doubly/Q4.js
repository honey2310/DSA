function findPairsWithSum(head, target) {
  // Find tail first
  let tail = head;
  while (tail.next) tail = tail.next;

  let left = head,
    right = tail;
  const result = [];

  while (left !== right && right.next !== left) {
    const sum = left.val + right.val;
    if (sum === target) {
      result.push([left.val, right.val]);
      left = left.next;
      right = right.prev;
    } else if (sum < target) left = left.next;
    else right = right.prev;
  }
  return result;
}
