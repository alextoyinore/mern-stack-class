// Variables examples
var message = "Hello, World!"; // Declaring a variable using var
console.log(message);

let count = 10; // Declaring a variable using let
console.log("Count is:", count);

const pi = 3.14; // Declaring a constant using const
console.log("Value of pi is:", pi);

// pi = 3.14159; // This will cause an error since pi is a constant

var message = "New Message"; // Re-declaring variable with var
console.log(message);

function showScope() {
    let count = 20; 
    console.log("Count inside function is:", count);
}

showScope();
console.log("Global Count is still:", count);

var name = 'John Doe';
name = 'Jane Doe'; // Reassigning variable
console.log("Updated name is:", name);


// Variable naming conventions
let _validName = "Valid";
let $anotherValidName = "Also Valid";
// let 1invalidName = "Invalid"; // This will cause an error
console.log(_validName, $anotherValidName);

let userAge = 25; // camelCase
let userEmail = ""; // camelCase
console.log("User Age:", userAge, "User Email:", userEmail);

let first_name = "John"; // snake_case
let last_name = "Doe"; // snake_case
console.log("First Name:", first_name, "Last Name:", last_name);


// let first name = "John"; // Invalid due to space
// console.log("First Name with space:", first name); // This will cause an error

let ____firstname = "John"; // Valid but not recommended
console.log("Firstname with underscores:", ____firstname);

