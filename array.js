// Array : Mutable Data in a sequence.Array

// Method to create an array

//Method 1 : 

// var a = [10,20,30,40,50]
// console.log(a)


// Method 2 : 

// var a = []

// a.push(10)
// a.push(20)
// a.push(30)
// a.push(40)
// a.push(50)

// console.log(a)


// Method 3 : 

// var a = Array(10,20,30,40,50)
// console.log(a)

// Array using loops.

// for (let i=0; i<a.length; i++){
//     console.log(a[i]);
// }


//Methods in Array


//  toString , join() , array Destructuring**

// var a = [10,20,30,40,50]

// console.log(a)
// console.log(a.toString())
// console.log(a.join("-"))

// Function in Array

// push pop unshift shift splice 

// push : insert at last 
// pop : delete from last 
// unshift : insert at start
// shift : delete from start 
// splice : delete and from a specific location 
// delete : delete and leave space empty

// var a = [10,20,30,40,50]

// console.log(a)
// a.push(15)

// console.log(a)

// a.pop()
// console.log(a)

// a.splice(2,0,23,24,25)

// console.log(a)

// a.splice(2,3)


// console.log(a)

// delete(a[2])


// console.log(a)


// Array Slicing

// let a = [10,20,30,40,50,60,70,80,90,100]

// console.log(a.slice(3,6))

// Array Concatination

// let b = [110,120,130,140,150]

// let c = a.concat(b)

// console.log(c)


// Higher Order Function : Function to which we provide functions as arguments instead of values.

// 1. Find : return item that pass a test for the first time.
// 2. FindIndex : return the index of the element which passed the test.
// 3. Map : return array of the result of all the elements on which test is runned.Find
// 4. Filter : return all the element which passed the test.


var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// function check(item){
//     return item%5==0
// } 

// console.log(a.find(check))
// console.log(a.findIndex(check))
// console.log(a.map(check))
// console.log(a.filter(check))

// forEach function

// console.log(a.forEach(item,index)=>{
//     console.log(`a[${index}] = ${a[index]}`)
// })

// var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// //reduce() : 
// function sample(prev,current){
//     return prev+current
// }
// console.log(a.reduce(sample,0))

// Array Destructuring

var a = [1001, "Ujjwal", "Trainee", 400000, "Meerut", "Uttar Pradesh"]

var [id,name,designation,salary,city,state] = a

console.log(
    `
    Id          = ${id}
    Name        = ${name}
    Designation = ${designation}
    
    `
)