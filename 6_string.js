// # JavaScript Strings Notes

// ## Template Literals (Backticks)

// ```javascript
// let name = "Aditya";
// let age = 19;

// // Best way to insert variables inside a string
// console.log(`My name is ${name} and I am ${age} years old.`);
// ```

// * Use backticks: ``
// * Insert variables using `${variable}`

// ---

// # String Methods

// Common string methods:

// ```javascript
// trim()
// toUpperCase()
// toLowerCase()
// slice()
// at()
// replace()
// includes()
// startsWith()
// endsWith()
// ```

// ---

// # Important Concept: Strings are Immutable

// JavaScript strings are **immutable**.

// This means:

// * We cannot directly modify characters of a string.
// * String methods return a **new string**.
// * Original string remains unchanged unless we assign the result back.

// Example:

// ```javascript
// let str = "hello";

// str[0] = "H";

// console.log(str); // hello
// ```

// The string did not change.

// ---

// # Method 1: Store the Result

// ```javascript
// let str = "  Hello World!       ";

// str = str.trim();

// console.log(str);
// ```

// Output:

// ```javascript
// Hello World!
// ```

// What happened?

// 1. `trim()` created a new string.
// 2. `str` now refers to the new string.
// 3. The value stored in `str` is updated.

// You can also use another variable:

// ```javascript
// let str = "  Hello World!       ";

// let newStr = str.trim();

// console.log(newStr);
// ```

// ---

// # Method 2: Directly Print the Result

// ```javascript
// let str = "  Hello World!       ";

// console.log(str.trim());
// ```

// Output:

// ```javascript
// Hello World!
// ```

// But:

// ```javascript
// console.log(str);
// ```

// still prints:

// ```javascript
//   Hello World!
// ```

// because the original string was never updated.

// ---

// # More Examples

// ```javascript
// let str = "hello";

// console.log(str.toUpperCase()); // HELLO
// console.log(str);               // hello
// ```

// Original string is unchanged.

// To update:

// ```javascript
// str = str.toUpperCase();

// console.log(str); // HELLO
// ```

// ---

// # Rule to Remember

// For string methods:

// ```javascript
// str = str.method();
// ```

// Examples:

// ```javascript
// str = str.trim();
// str = str.toUpperCase();
// str = str.toLowerCase();
// str = str.replace("Hello", "Hi");
// ```

// Most string methods return a new string.
// If you want the change to be saved, assign the result back to the variable.
