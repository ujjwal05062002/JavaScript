// Recursion : In recursion a function  calls itselves to complete its function.

// Factorial using recursion 

function factorial(num)
{
if(num<=1){
    return 1
}
else
{
    return num*factorial(num-1)
}
}

console.log(factorial(5))