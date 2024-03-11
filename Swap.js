// Swapping without third variable 

let a = parseInt(prompt("Enter the first variable for swapping : "));
let b = parseInt(prompt("Enter the second variable :"));
console.log('Before Swapping : ');
console.log(`a = ${a}`)
console.log(`b = ${b}`)
a = a+b  //  a = 5 | b = 6  |  a = 11
b = a-b  // a = 11 | b = 5 | b = 6
a = a-b // 

console.log('After Swapping : ')
console.log(`a = ${a}`)
console.log(`b = ${b}`)