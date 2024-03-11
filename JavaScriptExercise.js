// Area of circle 

let Radius = parseInt(prompt("Enter the radius of the circle to find area : "))
console.log(`Area of circle : ${3.14*Radius*Radius}`);


// Area of Rectangle

let LengthOfRectangle = parseInt(prompt("Enter the Length of the Rectangle : "))
let BredthofRectangle = parseInt(prompt("Enter the Breadth of rectangle : "))

console.log(`Area of Rectangle : ${l*b}`);

// Area of right angled triangle 

let TriangleHeight = parseInt(prompt("Enter the height of the triangle : "))
let TriangleBase = parseInt(prompt("Enter the Base of the triangle "))
console.log(`Area of Triangle : ${1/2*(b*h)}`);

// Area of Square

let squareSide = parseInt(prompt("Enter the side of the Square : "))
console.log(`Area of square : ${squareSide**2}`)

// Swap Value of two variables

let a = parseInt(prompt("Enter the First Swapping Variable : "))
let b = parseInt(prompt("Enter the Second Swapping Variable : "))
console.log(` Before Swapping a = ${a}`)
console.log(` Before Swapping b = ${b}`)

let c = a + b;
a = c-a
b = c-b


console.log(` After Swapping  a= ${a}`)
console.log(` After Swapping b = ${b}`)

// Convert C to F

let C = parseInt(prompt("Enter the C : "))
console.log(`C = ${F*(9/5+32)}`)

// Convert F to C 

let F = parseInt(prompt("Enter the C : "))
console.log(`C = ${(F-32)*5/9}`);
