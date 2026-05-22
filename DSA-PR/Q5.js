class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isCircular(head) {
  if (!head) return true;

  let temp = head;
  while (head && head.next !== temp) head = head.next;

  if (!head || !head.next) return false;

  return true;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log(isCircular(head) ? "Yes" : "No");

head.next.next.next.next = head;

console.log(isCircular(head) ? "Yes" : "No");
