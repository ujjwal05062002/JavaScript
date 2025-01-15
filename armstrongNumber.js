var num = Number(prompt("enter the number : "))
var originalNum = num
var count = 0
var sum = 0


while (num!=0){
    count = count + 1
    num = parseInt(num/10)
}

num = originalNum

while (num!=0){
    let r = num%10
    sum = sum+r**(count)
    num = parseInt(num/10) 
}


if (originalNum==sum){
    console.log("Armstrong Number");
}
else{
    console.log("not armstrong");
    
}