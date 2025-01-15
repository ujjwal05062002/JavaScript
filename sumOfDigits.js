// sum of digits

var n = Number(prompt("Enter the number : "))

var sum = 0

while (n!=0){
    let r = n%10
    sum = sum + r
    n = parseInt(n/10)
}

document.write(`sum of  ${n} is ${sum}`)