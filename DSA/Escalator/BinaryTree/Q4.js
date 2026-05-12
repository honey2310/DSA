function treeHeight(root) {
  if (!root) return 0;
  const leftHeight = treeHeight(root.left);
  const rightHeight = treeHeight(root.right);
  return 1 + Math.max(leftHeight, rightHeight);
}

// Iterative using BFS
function treeHeightBFS(root) {
  if (!root) return 0;
  let height = 0;
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    height++;
    while (size--) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return height;
}
