class CNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function insertCircular(tail, val) {
  const node = new CNode(val);
  if (!tail) {
    node.next = node;
    return node;
  }

  node.next = tail.next; // new node points to head
  tail.next = node; // tail points to new node
  return tail; // return same tail (or node if inserting at end)
}

function insertAtEnd(tail, val) {
  const node = new CNode(val);
  if (!tail) {
    node.next = node;
    return node;
  }
  node.next = tail.next;
  tail.next = node;
  return node; // new node becomes the tail
}
