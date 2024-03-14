// String : String is the collection of Character or array of character.

// string using loops

// 

// 1. For Loop

// for (let i=0; i<a.length; i++){
//     console.log(a[i])
// }

// 2. While Loop
// let i=0;
// while( i<a.length ){
//     console.log(a[i])
//     i++
// }

// 3. Do While Loop

// let i = 0
// do{
//     console.log(a[i])
//     i++
// }
// while (i<a.length)

 // 4. For In Loop  : It returns with index

// for (let i in a){
//     console.log(a[i])
// }

// 5. For of Loop : It returns value

// for (let i of a){
//     console.log(i)
// }

// // indexof

// console.log(a.indexOf('a'))

// // lasrIndexof

// console.log(a.lastIndexOf('a'))

// // search

// console.log(a.search('a'))

// // includes

// console.log(a.includes('z'))

// concat() : concat one or more strings in a string   

// var a = "Ducat"
// var b = "Education"
// var c = "Noida"

// var d = a+b+c
// console.log(d);

// var e = a.concat(b,c)
// console.log(e);




// // startsWith() 
// // endsWith()

// console.log(a.startsWith('J'))
// console.log(a.endsWith('a'))

// // toUpperCase()
// // toLowerCase()

// console.log(a.toLowerCase())
// console.log(a.toLocaleLowerCase())
// console.log(a.toUpperCase())
// console.log(a.toLocaleUpperCase())



// var a = "Javascript is a scripting language"


// // substr() : return string from index to number of characters.

// console.log(a.substr(3,5));

// // slice() :

// console.log(a.slice(0,3))

// // substring() :

// console.log(a.substring(3,5));


var a = "Javascript is is is is a scripting language. "

// repeat replace replaceAll

// console.log(a.repeat(4))

// console.log(a.replace("is","was"))


// console.log(a.replaceAll("is","was"))

//split trim ltrim rtrim

let trimStr = "       This is trim     "

console.log(trimStr.trimRight())

//localeCompare
let b= "Ujjwal"
let c = "Ujjwal"

console.log(b.localeCompare(c))