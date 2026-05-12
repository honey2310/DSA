function evalPostfix(expression) {
  const stack = [];
  const tokens = expression.split(" ");

  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop(),
        a = stack.pop();
      if (token === "+") stack.push(a + b);
      else if (token === "-") stack.push(a - b);
      else if (token === "*") stack.push(a * b);
      else if (token === "/") stack.push(Math.trunc(a / b));
    }
  }
  return stack[0];
}

// Example: "3 4 + 2 *" => (3+4)*2 = 14
console.log(evalPostfix("3 4 + 2 *")); // 14
console.log(evalPostfix("5 1 2 + 4 * + 3 -")); // 14
