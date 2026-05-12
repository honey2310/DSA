// Recursive
function preorderRecursive(root, result = []) {
  if (!root) return result;
  result.push(root.val);
  preorderRecursive(root.left, result);
  preorderRecursive(root.right, result);
  return result;
}

// Iterative
function preorderIterative(root) {
  if (!root) return [];
  const result = [],
    stack = [root];
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}

// Root -> Left -> Right
