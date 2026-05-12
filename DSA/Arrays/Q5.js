function mergeSorted(arr1, arr2) {
  let m = arr1.length - 1,
    n = arr2.length - 1;
  let last = m + n + 1;

  while (m >= 0 && n >= 0) {
    if (arr1[m] > arr2[n]) {
      arr1[last--] = arr1[m--];
    } else {
      arr1[last--] = arr2[n--];
    }
  }
  while (n >= 0) arr1[last--] = arr2[n--];
  return arr1;
}

// Example: arr1 has extra space [1,3,5,0,0,0], arr2 = [2,4,6]
console.log(mergeSorted([1, 3, 5, 0, 0, 0], [2, 4, 6])); // [1,2,3,4,5,6]
