// fibonacci series : 0 1 1 2 3 5 8 13

var fib_num = Number(props("Enter the fibonacci number : "))

var a = 0
var b = 1
var sum = a+b

document.write(`${a} ${b}`)

while (sum<=fib_num){
    document.write(`${sum}`)
    a = b
    b = sum
    sum = a+b
}
