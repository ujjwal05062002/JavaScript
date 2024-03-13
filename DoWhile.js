// DO-WHILE LOOP

// var i = 1
// do{
//     console.log(`Hello World ${i}`)
//     i++
// }
// while(i<=10)


// Calculator Program

do{
    var a = Number(prompt("Enter the first number : "))
    var b = Number(prompt("Enter the second number : "))
    var ch = prompt("Press + for Addition \n Press - for Subtraction \n Press * for Multiplication \n Press / for Divison \n Press ** for Power \n  Press % for Remainder\n Enter your choice : " )
    switch(ch){
        case '+':{
            console.log(`${a} + ${b} = ${a+b}`)
            break
        }
        case '-':{
            console.log(`${a} - ${b} = ${a-b}`)
            break
        }
        case '*':{
            console.log(`${a} * ${b} = ${a*b}`)
            break
        }
        case '**':{
            console.log(`${a} ** ${b} = ${a**b}`)
            break
        }
        case '%':{
            console.log(`${a} % ${b} = ${a%b}`)
            break
        }
        case '/':{
            console.log(`${a} / ${b} = ${a/b}`)
            break  
        }
        default:{
            console.log(`Invalid Choice`)
        }
    }
    ch = prompt("Press q to Exit \n Press any other key to Continue : ")
}
while(ch!='n')
