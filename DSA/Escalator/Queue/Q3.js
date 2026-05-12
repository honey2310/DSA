function firstNonRepeating(stream) {
  const count = {};
  const queue = [];
  const result = [];

  for (const ch of stream) {
    count[ch] = (count[ch] || 0) + 1;
    queue.push(ch);

    while (queue.length && count[queue[0]] > 1) queue.shift();

    result.push(queue.length ? queue[0] : "#");
  }
  return result.join("");
}

// Example
console.log(firstNonRepeating("aabbc"));
// a, a, b, b, c => "aaa##"
