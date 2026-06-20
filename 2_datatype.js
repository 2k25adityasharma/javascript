// # JavaScript Data Types Notes

// ## What is a Data Type?

// A data type tells JavaScript what kind of value is stored in a variable.

// Examples:

// ```javascript
// let name = "Aditya"; // String
// let age = 19;        // Number
// let isStudent = true; // Boolean
// ```

// ---

// # JavaScript Data Types

// JavaScript has **2 categories** of data types:

// 1. Primitive Data Types
// 2. Reference (Non-Primitive) Data Types

// ---

// # 1. Primitive Data Types

// Primitive values are stored directly in memory.

// JavaScript has **7 Primitive Data Types**:

// ```javascript
// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol
// ```

// ---

// ## String

// Stores text data.

// ```javascript
// let name = "Aditya";
// ```

// ---

// ## Number

// Stores integers and decimal numbers.

// ```javascript
// let age = 19;
// let price = 99.99;
// ```

// ---

// ## Boolean

// Stores only true or false.

// ```javascript
// let isLoggedIn = true;
// let isAdmin = false;
// ```

// ---

// ## Undefined

// A variable is declared but not assigned a value.

// ```javascript
// let user;

// console.log(user); // undefined
// ```

// ---

// ## Null

// Represents an intentionally empty value.

// ```javascript
// let user = null;
// ```

// ---

// ## BigInt

// Used for very large integers.

// ```javascript
// let bigNumber = 123456789012345678901234567890n;
// ```

// ---

// ## Symbol

// Used to create unique identifiers.

// ```javascript
// let id = Symbol("id");
// ```

// ---

// # Checking Data Types

// Use the typeof operator.

// ```javascript
// console.log(typeof "Aditya"); // string
// console.log(typeof 19);       // number
// console.log(typeof true);     // boolean
// ```

// Examples:

// ```javascript
// console.log(typeof undefined); // undefined
// console.log(typeof null);      // object (JavaScript bug)
// console.log(typeof 10n);       // bigint
// console.log(typeof Symbol());  // symbol
// ```

// ---

// # 2. Reference (Non-Primitive) Data Types

// Reference types are stored by reference.

// Main Reference Types:

// ```javascript
// Object
// Array
// Function
// ```

// ---

// ## Object

// Stores data in key-value pairs.

// ```javascript
// let person = {
//     name: "Aditya",
//     age: 19
// };
// ```

// ---

// ## Array

// Stores multiple values.

// ```javascript
// let fruits = ["Apple", "Banana", "Mango"];
// ```

// ---

// ## Function

// Functions are also objects in JavaScript.

// ```javascript
// function greet() {
//     console.log("Hello");
// }
// ```

// ---

// # typeof Examples

// ```javascript
// console.log(typeof {});        // object
// console.log(typeof []);        // object
// console.log(typeof function(){}); // function
// ```

// ---

// # Primitive vs Reference

// ## Primitive

// ```javascript
// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20
// ```

// Changing `b` does not affect `a`.

// ---

// ## Reference

// ```javascript
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr2[0] = 100;

// console.log(arr1); // [100, 2, 3]
// console.log(arr2); // [100, 2, 3]
// ```

// Changing `arr2` also changes `arr1` because both refer to the same array.

// ---

// # Rule to Remember

// Primitive Types:

// ```javascript
// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol
// ```

// Reference Types:

// ```javascript
// Object
// Array
// Function
// ```

// Interview Question:

// ```javascript
// typeof null
// ```

// Output:

// ```javascript
// "object"
// ```

// This is a well-known JavaScript bug that exists for historical reasons.
