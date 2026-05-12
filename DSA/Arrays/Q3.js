function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let k = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }
  return k; // first k elements are unique
}

// Example
const arr = [1, 1, 2, 3, 3, 4];
const len = removeDuplicates(arr);
console.log(arr.slice(0, len)); // [1, 2, 3, 4]
