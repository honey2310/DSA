let array = [1, 2, 2, 3, 4, 5, 5];

for (let i = 0; i < array.length - 1; i++) { // 
  if (array[i] === array[i + 1]) { // array[1] == array[2]
    array.splice(i, 1); 
    i--; //i=0
  }
}

console.log(array);
