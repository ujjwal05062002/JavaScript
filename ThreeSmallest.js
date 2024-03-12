// Smallest of three number

let a = Number(prompt("Enter the first number : "))
let b = Number(prompt("Enter the second number : "))
let c = Number(prompt("Enter the third number : "))

if (a<b){
    if (a<c){
        document.write(`${a} is smallest`)
    }
    else{
        document.write(`${c} is smallest`)
    }
}
else{ 
    if (b<c){
        document.write(`${b} is smallest`)
    }
    else{ 
        document.write(`${c} is smallest`)
    }
}