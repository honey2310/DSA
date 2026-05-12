function secondLargest(arr) {
  let first = -Infinity,
    second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) second = num;
  }
  return second === -Infinity ? null : second;
}

// Example
console.log(secondLargest([3, 1, 4, 1, 5, 9, 2, 6])); // 6
