// Implement Selection Sort.

let array = [45, 23, 11, 36];

// find smallest from all

let arr = [64, 25, 12, 22, 11];

for (let i = 0; i < arr.length - 1; i++) {
  let minIndex = i; // 0 // minINdex=0

  for (let j = i + 1; j < arr.length; j++) {
    //j=4
    if (arr[j] < arr[minIndex]) {
      // 11<64
      minIndex = j; // minindex=4
    }
  }

  // Swap 
  let temp = arr[i]; // temp=64
  arr[i] = arr[minIndex]; // arr[0]=11
  arr[minIndex] = temp; // arr[4]=64
}

console.log(arr);
