class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(val) {
    this.items.push(val);
  }
  dequeue() {
    return this.isEmpty() ? "Underflow" : this.items.shift();
  }
  front() {
    return this.isEmpty() ? "Empty" : this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.join(" -> "));
  }
}

// Example
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.front()); // 10
console.log(q.dequeue()); // 10
q.print(); // 20 -> 30
