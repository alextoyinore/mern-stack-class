// Data Types in JavaScript
// This file demonstrates the various data types available in JavaScript.

// 1. Primitive Data Types
// a. Number
let num = 42e5;
console.log("Number:", typeof num);
// b. String
let str = "Hello, World!";
console.log("String:", typeof str);
// c. Boolean
let bool = true;
console.log("Boolean:", typeof bool);
// d. Undefined
let undef;
console.log("Undefined:", typeof undef);
// e. Null
let nul = null;
console.log("Null:", typeof nul);
// f. Symbol
let sym = Symbol("unique");
console.log("Symbol:", typeof sym);
// g. BigInt
let bigInt = 9007199254740991n;
console.log("BigInt:", typeof bigInt);


// 2. Non-Primitive Data Types
// a. Object
let obj = { name: "Alice", age: 30 };
console.log("Object:", typeof obj);
// b. Array
let arr = [1, 2, 3, 3, 4, 5];
console.log("Array:", typeof arr);
// c. Function
let func = function() { return "I am a function"; };
console.log("Function:", typeof func);
// d. Date
let date = new Date();
console.log("Date:", typeof date);
// e. RegExp
let regex = /ab+c/;
console.log("RegExp:", typeof regex);


// 3. Type Conversion Examples
// a. Implicit Conversion
let implicitNum = "5" * 2; // String to Number
console.log("Implicit Conversion (String to Number):", implicitNum, typeof implicitNum);
// b. Explicit Conversion
let explicitStr = String(123);
console.log("Explicit Conversion (Number to String):", explicitStr, typeof explicitStr);
// c. String to Number
let strToNum = Number("456");
console.log("String to Number:", strToNum, typeof strToNum);
