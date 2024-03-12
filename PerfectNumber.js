// WAP to check whether a number is perfect square number or not.

let perfectSquare = Number(prompt("Enter the number : "));
let checker = Math.sqrt(perfectSquare);
let floorValue = Math.floor(checker);

if (checker - floorValue === 0) {
    document.write(`${perfectSquare} is a perfect square`);
} else {
    document.write(`${perfectSquare} is not a perfect square`);
}

