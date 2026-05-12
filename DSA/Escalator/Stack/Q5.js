function nextGreaterElement(arr) {
  const n = arr.length;
  const result = new Array(n).fill(-1);
  const stack = []; // stores indices

  for (let i = 0; i < n; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      const idx = stack.pop();
      result[idx] = arr[i];
    }
    stack.push(i);
  }
  return result;
}

// Example
console.log(nextGreaterElement([4, 5, 2, 10, 8]));
// [5, 10, 10, -1, -1]
