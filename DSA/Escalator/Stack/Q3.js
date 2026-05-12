function isBalanced(str) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };

  for (const ch of str) {
    if ("({[".includes(ch)) {
      stack.push(ch);
    } else if (")]}".includes(ch)) {
      if (stack.pop() !== map[ch]) return false;
    }
  }
  return stack.length === 0;
}

// Examples
console.log(isBalanced("({[]})")); // true
console.log(isBalanced("([)]")); // false
console.log(isBalanced("{[}")); // false
