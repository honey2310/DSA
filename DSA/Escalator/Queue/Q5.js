function generateBinary(n) {
  const result = [];
  const queue = ["1"];

  for (let i = 0; i < n; i++) {
    const front = queue.shift();
    result.push(front);
    queue.push(front + "0");
    queue.push(front + "1");
  }
  return result;
}

// Example
console.log(generateBinary(10));
// ["1","10","11","100","101","110","111","1000","1001","1010"]
