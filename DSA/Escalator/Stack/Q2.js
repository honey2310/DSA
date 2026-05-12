class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class StackLL {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.length++;
  }

  pop() {
    if (!this.top) return null;
    const val = this.top.val;
    this.top = this.top.next;
    this.length--;
    return val;
  }

  peek() {
    return this.top ? this.top.val : null;
  }
  isEmpty() {
    return this.length === 0;
  }
}

// Example
const s = new StackLL();
s.push(1);
s.push(2);
s.push(3);
console.log(s.peek()); // 3
console.log(s.pop()); // 3
