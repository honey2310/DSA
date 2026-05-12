function isBalanced(root) {
  function checkHeight(node) {
    if (!node) return 0;
    const left = checkHeight(node.left);
    if (left === -1) return -1;
    const right = checkHeight(node.right);
    if (right === -1) return -1;
    if (Math.abs(left - right) > 1) return -1;
    return 1 + Math.max(left, right);
  }
  return checkHeight(root) !== -1;
}

// Returns -1 (unbalanced sentinel) up the call stack
// Avoids recomputing heights — O(n) time, O(h) space
