// Recursive
function postorderRecursive(root, result = []) {
  if (!root) return result;
  postorderRecursive(root.left, result);
  postorderRecursive(root.right, result);
  result.push(root.val);
  return result;
}

// Iterative (using two stacks)
function postorderIterative(root) {
  if (!root) return [];
  const result = [],
    stack = [root];
  while (stack.length) {
    const node = stack.pop();
    result.unshift(node.val); // add to front
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return result;
}

// Left -> Right -> Root
