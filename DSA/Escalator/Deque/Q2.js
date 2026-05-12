class DNode {
  constructor(val) {
    this.val = val;
    this.prev = this.next = null;
  }
}

class DequeLL {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  pushFront(val) {
    const node = new DNode(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  pushBack(val) {
    const node = new DNode(val);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  popFront() {
    if (!this.head) return null;
    const val = this.head.val;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;
    return val;
  }

  popBack() {
    if (!this.tail) return null;
    const val = this.tail.val;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.length--;
    return val;
  }
}
