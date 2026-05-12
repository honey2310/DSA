class DNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLL {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(val) {
    const node = new DNode(val);
    if (!this.head) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  print() {
    let curr = this.head,
      result = [];
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    console.log(result.join(" <-> "));
  }
}

// Example
const dll = new DoublyLL();
dll.insertAtBeginning(3);
dll.insertAtBeginning(2);
dll.insertAtBeginning(1);
dll.print(); // 1 <-> 2 <-> 3
