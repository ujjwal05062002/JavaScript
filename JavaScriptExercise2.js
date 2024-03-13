// // Print Table


// let num = Number(prompt("Enter the number : ")) 

// for (let i=1; i<=10; i++){
//     document.write(`${num} * ${i} = ${num*i}<br>`)
// }

// N number sum

// var rangeStart = Number(prompt("Enter the starting number : "))
// var rangeEnd = Number(prompt("Enter the last number : "))
// var sum = 0
// for (let i=rangeStart; i<=rangeEnd; i++){
//     sum = sum+i
// }

// document.write(`Sum of numbers from ${rangeStart} to ${rangeEnd} = ${sum}`)

 
// Sum of Even and Numbers in a specific range

// var start = Number(prompt("Enter the start number :"))
// var end = Number(prompt("Enter the end number : "))

// var evenSum = 0;
// var oddSum = 0;

// for (let i = start; i<=end; i++){
//     if (i%2 == 0){
//         evenSum = evenSum + i
//     }
//     else{
//         oddSum = oddSum + i
//     }
// }

// document.write(`Sum of odd digit = ${oddSum}<br>`)
// document.write(`Sum of even digit = ${evenSum}`)


// // Factorial of a number

// var  n = Number(prompt("Enter the number of which factorial is to be calculated : "))
// var fact = 1
// for (i=n; i>=1; i--){
//     fact = fact*i
// }

// document.write(`Factorial of ${n} is ${fact}`)


// // Perfect Number

//var n = Number(prompt("Enter the number to check perfect number : "))
// divSum = 0
// for (let i=1; i<n; i++){
//     if (n%i==0){
//         divSum = divSum+ i
//     }
// }

// if (divSum === n){
//     document.write(`${n} is a perfect number`)
// }
// else{
//     document.write(`${n} is not a perfect number`)
// }

// // Prime Number

// var n = Number(prompt("Enter the number to check whether prime or not : "))
// var prime = true;
// for (let i=2; i<n; i++){
//     if(n%i==0){
//         prime = false
//         break
//     }
    
// }
// if (prime && n>1){
// document.write(`${n} is a prime number`)
// }
// else{
// document.write(`${n} is not a prime number`)
// } 


// Fibonacci Series

// var n = Number(prompt("Enter the number for fibonacci series : "))

// var a = 0
// var b = 1
// var sum = a + b
// document.write(`${a} ${b}`)
// while (sum<=n){
//     document.write(`${sum} `)
//     a = b
//     b = sum
//     sum = a+b
// } 

// // Sum of digits

// var num = Number(prompt("Enter the number here : "))
 
// var sum = 0

// while (n!=0){
//     let r = num%10
//     sum = sum + r
//     num = parseInt(num/10)
// }


// document.write(`sum of digits : ${sum}`)


// Reverse a number


// var num = Number(prompt("Enter the number here : "))

// var rev = 0

// while (n!=0){
//     let remainder = num%10
//     rev = rev*10+remainder
//     n=parseInt(n/10)
// }
// document.write(`Reverse = ${rev}`)


// Exercise  

// // sum of odd and even using while

// n = Number(prompt("enter the number :"))  
// var oddSum  = 0
// var evenSum  = 0 
// while (n>0){
//     var r = n%10
//     if (r%2==0){
//         evenSum = evenSum+r
//     }
//     else{
//         oddSum =  oddSum + r
//     }
//     n = Math.floor(n/10)
// }


// document.write(`Even Sum : ${evenSum}`)
// document.write(`Odd Sum : ${oddSum}`)


// // NEON number check while  9*9 = 81 => 8+1 = 9

// var num = Number(prompt("Enter the number for NEON checking : "))
// var numSquare = num**2
// var sum = 0
// while(numSquare>0){
//     var r = numSquare%10
//     sum = sum + r
//     numSquare = Math.floor(numSquare/10)
// }

// if (num===sum){
//     document.write(`${num} is a NEON number`)
// }
// else{
//     document.write(`${num} is not a NEON number`)
// }

// // Reverse a number using while 

// var num = Number(prompt("Enter the number : "))
// var rev = 0
// while (num>0){
//     var r = num % 10
//     rev = (rev*10)+r
//     num  = num/10
// }


// // Armstrong Number

// var num  = Number(prompt("Enter the number : "))
// var sum = 0
// var n = num
// while (num!=0){
//     let r = num%10
//     sum = sum+(r*r*r)
//     num = parseInt(num/10)
// }
// if (n === sum){
//     document.write(`${n} is an Armstrong Number`)
// }
// else{
//     document.write(`${n} is not an Armstrong Number`)

// }


// Palindrome : Reverse Number = Original Number

// var num = Number(prompt("Enter a number : "))
// var n = num
// var rev = 0
// while (num>0){
//     let r = num%10
//     rev = rev*10 + r
//     num = parseInt(num/10)
// }

// if (rev === n){
//     document.write(`${n} is a Palindrome Number`)
// }
// else{
//     document.write(`${n} is not a Palindrome Number`)
// }


// Magical Number 

var num = Number(prompt("Enter the number here : "));
var count = 0;
var n = num;
var sum = 0;

// Count the number of digits 
while (num != 0) {
    count++;
    num = parseInt(num / 10);
}

// Reset num for the second loop 
num = n;

// Check if the number is magical
while (num != 0) {
    let r = num % 10; // Extract the last digit
    sum += Math.pow(r, count); // Add the digit raised to the power of count
    num = parseInt(num / 10); // Move to the next digit
}

// Check if the number is magical
if (sum === n) {
    document.write(`${n} is a Magical Number`);
} else {
    document.write(`${n} is not a Magical Number`);
}
