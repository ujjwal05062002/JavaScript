// wap to print the area of circle

// var r = Number(prompt("enter the radius of circle : "))
// var area =  console.log(`Area of circle : ${3.14*r**2}`);

// area of rectangle


// var l =  Number(prompt(`enter the length : `))
// var b =  Number(prompt(`enter the breadth : `))

// console.log(`Area of Rectangle : ${l*b}`)

// area of cubid 

// var l =  Number(prompt(`enter the length : `))
// var b =  Number(prompt(`enter the breadth : `))
// var h =  Number(prompt(`enter the height : `))

// console.log(`area = ${l*b*h}`);


// swapping values in js

// using a third variable

// var a = Number(prompt("Enter the first number : "))
// var b = Number(prompt("Enter the second number : "))


// document.write(`
//     <h1>before swapping</h1>
//     a = ${a}
//     b = ${b}
//     `)

// var c  = a
// a = b
// b = c

// document.write(`
//     <h1>after swapping</h1>
//     a = ${a}
//     b = ${b}
//     `)

// without using a third variable

                // a = 20  b=30 

// a = a+b         // a =50  b= 30
// b = a-b 
// a=  a-b

//  document.write(`
//         <h1>after swapping</h1>
//         a = ${a}
//         b = ${b}
//         `)

// flow control statement 

// for loop  


// for (let i=1; i<=10; i++){
//        console.log("Hello World");
// }


// for (let i=1; i<=10; ++i){
//        console.log(`Hello World ${i}`);
// }


// for (let i=1; i<=10; i = i++){
//        console.log("Hello World");
// }

// to print sum of even and odd number

// var start_num = Number(prompt("Enter the starting number : "))
// var end_num = Number(prompt("Enter the ending number : "))
// var even_sum =  0
// var odd_sum =  0
// for (var i =start_num; i<=end_num; i++){
//        if (i % 2 == 0){
//               even_sum = even_sum + i
//        }
//        else {
//               odd_sum = odd_sum + i
//        }
// }

// factorial of a number 

// var fact_num = Number(prompt("Enter the factorial number : "))
// var factorial = 1
// for (var i=fact_num; i>=1; i-- ){
//        factorial = factorial*i 
// }
// console.log(factorial)

// check whether a number is perfect or not

// var test_num = Number(prompt("Enter the number to check whether the number is perfect or not : "))

// var sum = 0

// for (var i = 1; i<test_num; i++){
//        if (test_num%i == 0){
//               sum = sum + i
//        }
// }

// if  (sum==test_num){
//        console.log(`${test_num} is a perfect number`);
// }
// else{
//        console.log(`${test_num} is not a perfect number`);
// }


// prime or not

var prime_test = Number(prompt("enter the number"))
var isPrime = false
for (var i = 2; i<=prime_test**0.5; i++){
       if (prime_test%i==0){
              isPrime = true
              break
       }
}
if (isPrime == true){
       console.log("The number is prime");
}
else{
       console.log("The number is not prime");     
}

