class QueueUsing2Stacks {
  constructor() {
    this.inbox = [];
    this.outbox = [];
  }

  enqueue(val) {
    this.inbox.push(val);
  }

  dequeue() {
    if (this.outbox.length === 0) {
      while (this.inbox.length) this.outbox.push(this.inbox.pop());
    }
    return this.outbox.length ? this.outbox.pop() : null;
  }

  front() {
    if (this.outbox.length === 0) {
      while (this.inbox.length) this.outbox.push(this.inbox.pop());
    }
    return this.outbox[this.outbox.length - 1] ?? null;
  }
}

// Example
const q = new QueueUsing2Stacks();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue()); // 1
console.log(q.front()); // 2
