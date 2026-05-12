class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.front = this.rear = -1;
  }

  enqueue(val) {
    if ((this.rear + 1) % this.size === this.front) return false; // full
    if (this.front === -1) this.front = 0;
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = val;
    return true;
  }

  dequeue() {
    if (this.front === -1) return null; // empty
    const val = this.queue[this.front];
    if (this.front === this.rear) this.front = this.rear = -1;
    else this.front = (this.front + 1) % this.size;
    return val;
  }

  isEmpty() {
    return this.front === -1;
  }
}

// Example
const cq = new CircularQueue(4);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
console.log(cq.dequeue()); // 1
