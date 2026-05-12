function isCircular(head) {
  if (!head) return false;
  let curr = head.next;
  while (curr && curr !== head) {
    curr = curr.next;
  }
  return curr === head;
}

// Alternative: Floyd's cycle detection
function isCircularFloyd(head) {
  if (!head) return false;
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
