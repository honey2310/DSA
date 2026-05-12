function isPalindromeDeque(str) {
  const deque = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("");

  while (deque.length > 1) {
    if (deque.shift() !== deque.pop()) return false;
  }
  return true;
}

// Examples
console.log(isPalindromeDeque("racecar")); // true
console.log(isPalindromeDeque("A man a plan a canal Panama")); // true
console.log(isPalindromeDeque("hello")); // false
