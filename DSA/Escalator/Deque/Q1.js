class Deque {
  constructor() {
    this.items = [];
  }
  pushFront(val) {
    this.items.unshift(val);
  }
  pushBack(val) {
    this.items.push(val);
  }
  popFront() {
    return this.isEmpty() ? null : this.items.shift();
  }
  popBack() {
    return this.isEmpty() ? null : this.items.pop();
  }
  peekFront() {
    return this.items[0] ?? null;
  }
  peekBack() {
    return this.items[this.items.length - 1] ?? null;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

// Example
const dq = new Deque();
dq.pushBack(1);
dq.pushBack(2);
dq.pushFront(0);
console.log(dq.peekFront()); // 0
console.log(dq.peekBack()); // 2
console.log(dq.popFront()); // 0
