var num = Number(prompt("Enter the number :" ))

var evenSum = 0
var oddSum  = 0

while (num!=0){
    let r = num%10
    if (r%2==0){
        evenSum = evenSum + r
    }
    else{
        oddSum = oddSum + r
    }
    num = parseInt(num/10)
}