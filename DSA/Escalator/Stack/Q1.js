class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    this.items.push(val);
  }
  pop() {
    return this.isEmpty() ? "Underflow" : this.items.pop();
  }
  peek() {
    return this.isEmpty() ? "Empty" : this.items[this.items.length - 1];
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
const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.peek()); // 30
console.log(s.pop()); // 30
s.print(); // 10 -> 20
