// Taking Input in JavaScript

var a = parseInt(prompt("Enter the first operator : "))
var b = parseInt(prompt("Enter the second operator : "))

console.log(`a = ${a}`);
console.log(`b = ${b}`);

// Operators in JavaScript

// 1. Arithematic Operator : +, -, *, / , **, 

console.log(`Arithematic Operation + on Both Operation : ${a + b} `)
console.log(`Arithematic Operation - on Both Operation : ${a-b} `)
console.log(`Arithematic Operation * on Both Operation : ${a*b} `)
console.log(`Arithematic Operation / on Both Operation : ${b/a} `)
console.log(`Arithematic Operation **(power) on Both Operation : ${a**b} `)

// 2. Assignment And Relational Operator (=, >, <, !=, ==, ===, <=, >=) : The relational operator returns value in true and false.
let str1 = prompt('Enter the string 1 : ');
let str2 = prompt('Enter the string 2 : ');

console.log(`str1 = ${str1}`);
console.log(`str2 = ${str2}`);

console.log(`Is a<b? : ${a<b}`);
console.log(`Is a>b? : ${a>b}`);
console.log(`Is a!=b? : ${a!=b}`);
console.log(`Is a==b? : ${a==b}`);
console.log(`Is a<=b? : ${a<=b}`);
console.log(`Is a>=b? : ${a>=b}`);


// 3. Logical Operator : AND (&&), OR(||), NOT(!)

console.log(`
And (&&) : Both Operands must be True for getting True as a result
OR (||) : Any one should be true for getting True as a result
NOT (!) : Convert True into False and Vice Versa
`)

