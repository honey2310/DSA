class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function printList(node) {
  let result = [];
  while (node) {
    result.push(node.data);
    node = node.next;
  }

  console.log(result.join("->"));
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let reverse = reverseList(head);
printList(reverse);
