var num = Number(prompt("Enter the number to be reversed : "))

var rev = 0

while (num!=0){
    let r = num % 10
    rev =  rev*10 + r
    num = parseInt(num/10)
}