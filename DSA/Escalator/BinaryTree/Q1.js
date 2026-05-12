class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// Recursive
function inorderRecursive(root, result = []) {
  if (!root) return result;
  inorderRecursive(root.left, result);
  result.push(root.val);
  inorderRecursive(root.right, result);
  return result;
}

// Iterative
function inorderIterative(root) {
  const result = [],
    stack = [];
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  return result;
}

// Left -> Root -> Right
