function slidingWindowMin(arr, k) {
  const result = [];
  const deque = []; // stores indices of increasing elements

  for (let i = 0; i < arr.length; i++) {
    // Remove out-of-window indices
    while (deque.length && deque[0] < i - k + 1) deque.shift();

    // Remove larger elements from back (keep minimum at front)
    while (deque.length && arr[deque[deque.length - 1]] > arr[i]) deque.pop();

    deque.push(i);
    if (i >= k - 1) result.push(arr[deque[0]]);
  }
  return result;
}

// Example
console.log(slidingWindowMin([2, 1, 5, 3, 6, 4, 8, 7], 3));
// [1, 1, 3, 3, 4, 4]
