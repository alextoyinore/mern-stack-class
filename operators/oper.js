// JavaScript Operators
// This file demonstrates various JavaScript operators including arithmetic, assignment, comparison, logical, and more.

// Arithmetic Operators
let a = 10;
let b = 5;

let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
let increment = ++a; // Increment
let decrement = --b; // Decrement
console.log(`Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}, Remainder: ${remainder}, Incremented a: ${increment}, Decremented b: ${decrement}`);

a += 5; // a = a + 5
b *= 2; // b = b * 2
console.log(`Updated a: ${a}, Updated b: ${b}`);


// Assignment Operators
let x = 20;
x -= 5; // x = x - 5
console.log('Updated x: ' + x);

// Comparison Operators
let isEqual = (x == 15); // Equality
let isStrictEqual = (x === 15); // Strict Equality
let isNotEqual = (x != 10); // Inequality
let isGreater = (x > 10); // Greater than
let isLess = (x < 20); // Less than
let isGreaterOrEqual = (x >= 15); // Greater than or equal to
let isLessOrEqual = (x <= 15); // Less than or equal to

console.log(`isEqual: ${isEqual}, isStrictEqual: ${isStrictEqual}, isNotEqual: ${isNotEqual}, isGreater: ${isGreater}, isLess: ${isLess}`);

let m = 10; // number
let n = '10'; // string
console.log('Loose Equality (m == n): ' + (m == n)); // true
console.log('Strict Equality (m === n): ' + (m === n)); // false    

// Logical Operators
let p = true;
let q = false;

let andResult = p && q; // Logical AND
let orResult = p || q; // Logical OR
let notResult = !p; // Logical NOT
console.log(`AND: ${andResult}, OR: ${orResult}, NOT: ${notResult}`);

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log('Can vote: ' + canVote);
