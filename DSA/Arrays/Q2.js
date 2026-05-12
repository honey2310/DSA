function rotateRight(arr, k) {
  const n = arr.length;
  k = k % n;
  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  return arr;
}

function reverse(arr, l, r) {
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r--;
  }
}

// Example
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]
