function maxSlidingWindow(arr, k) {
  const result = [];
  const deque = []; // stores indices

  for (let i = 0; i < arr.length; i++) {
    // Remove elements outside window
    while (deque.length && deque[0] < i - k + 1) deque.shift();

    // Remove smaller elements from back
    while (deque.length && arr[deque[deque.length - 1]] < arr[i]) deque.pop();

    deque.push(i);
    if (i >= k - 1) result.push(arr[deque[0]]);
  }
  return result;
}

// Example
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// [3, 3, 5, 5, 6, 7]
