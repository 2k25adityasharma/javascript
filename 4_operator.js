// # JavaScript Operations & Operator Precedence Notes

// ## What is an Operator?

// Operators are symbols that perform operations on values and variables.

// Example:

// ```javascript
// let a = 10;
// let b = 5;

// console.log(a + b); // 15
// ```

// ---

// # Arithmetic Operators

// Used for mathematical calculations.

// ```javascript
// +
// -
// *
// /
// %
// **
// ```

// Examples:

// ```javascript
// let a = 10;
// let b = 3;

// console.log(a + b);  // 13
// console.log(a - b);  // 7
// console.log(a * b);  // 30
// console.log(a / b);  // 3.333...
// console.log(a % b);  // 1
// console.log(a ** b); // 1000
// ```

// ---

// # Assignment Operators

// Used to assign values.

// ```javascript
// =
// +=
// -=
// *=
// /=
// %=
// ```

// Examples:

// ```javascript
// let x = 10;

// x += 5;
// console.log(x); // 15

// x -= 2;
// console.log(x); // 13
// ```

// ---

// # Comparison Operators

// Used to compare values.

// ```javascript
// ==
// ===
// !=
// !==
// >
// <
// >=
// <=
// ```

// Examples:

// ```javascript
// console.log(10 > 5); // true
// console.log(10 < 5); // false
// ```

// ---

// # == vs ===

// ## Double Equals (==)

// Checks only value.

// ```javascript
// console.log("5" == 5);
// ```

// Output:

// ```javascript
// true
// ```

// JavaScript converts types automatically.

// ---

// ## Triple Equals (===)

// Checks value and type.

// ```javascript
// console.log("5" === 5);
// ```

// Output:

// ```javascript
// false
// ```

// Because:

// ```javascript
// "5"  -> string
// 5    -> number
// ```

// Always prefer:

// ```javascript
// ===
// ```

// ---

// # Logical Operators

// Used with boolean values.

// ```javascript
// &&
// ||
// !
// ```

// Examples:

// ```javascript
// let age = 20;

// console.log(age > 18 && age < 30);
// console.log(age > 18 || age > 50);
// console.log(!(age > 18));
// ```

// ---

// # Increment and Decrement

// ```javascript
// ++
// --
// ```

// Examples:

// ```javascript
// let x = 10;

// x++;
// console.log(x); // 11

// x--;
// console.log(x); // 10
// ```

// ---

// # Prefix vs Postfix

// ## Postfix

// ```javascript
// let x = 5;

// console.log(x++);
// ```

// Output:

// ```javascript
// 5
// ```

// After execution:

// ```javascript
// x = 6
// ```

// ---

// ## Prefix

// ```javascript
// let x = 5;

// console.log(++x);
// ```

// Output:

// ```javascript
// 6
// ```

// Increment happens first.

// ---

// # String Operations

// ```javascript
// let firstName = "Aditya";
// let lastName = "Sharma";

// console.log(firstName + " " + lastName);
// ```

// Output:

// ```javascript
// Aditya Sharma
// ```

// ---

// # Number + String

// ```javascript
// console.log("1" + 2);
// ```

// Output:

// ```javascript
// "12"
// ```

// String concatenation occurs.

// ---

// ```javascript
// console.log("1" + 2 + 2);
// ```

// Output:

// ```javascript
// "122"
// ```

// ---

// ```javascript
// console.log(1 + 2 + "2");
// ```

// Output:

// ```javascript
// "32"
// ```

// First numbers are added, then converted to string.

// ---

// # Tricky Conversions

// ```javascript
// console.log(true + 1);
// ```

// Output:

// ```javascript
// 2
// ```

// Because:

// ```javascript
// true = 1
// ```

// ---

// ```javascript
// console.log(false + 1);
// ```

// Output:

// ```javascript
// 1
// ```

// Because:

// ```javascript
// false = 0
// ```

// ---

// # Operator Precedence

// When multiple operators are present, JavaScript follows precedence rules.

// Example:

// ```javascript
// console.log(2 + 3 * 4);
// ```

// Output:

// ```javascript
// 14
// ```

// Not:

// ```javascript
// 20
// ```

// Because multiplication happens first.

// ---

// # Precedence Order (Important)

// ### 1. Parentheses

// ```javascript
// ()
// ```

// Example:

// ```javascript
// console.log((2 + 3) * 4);
// ```

// Output:

// ```javascript
// 20
// ```

// ---

// ### 2. Exponentiation

// ```javascript
// **
// ```

// Example:

// ```javascript
// console.log(2 ** 3);
// ```

// Output:

// ```javascript
// 8
// ```

// ---

// ### 3. Multiplication, Division, Modulus

// ```javascript
// *
// /
// %
// ```

// ---

// ### 4. Addition and Subtraction

// ```javascript
// +
// -
// ```

// ---

// ### 5. Comparison Operators

// ```javascript
// >
// <
// >=
// <=
// ```

// ---

// ### 6. Equality Operators

// ```javascript
// ==
// ===
// !=
// !==
// ```

// ---

// ### 7. Logical AND

// ```javascript
// &&
// ```

// ---

// ### 8. Logical OR

// ```javascript
// ||
// ```

// ---

// ### 9. Assignment Operators

// ```javascript
// =
// +=
// -=
// *=
// ```

// ---

// # Rule to Remember

// ```text
// ()
// **
// * / %
// + -
// Comparison
// Equality
// &&
// ||
// Assignment
// ```

// A shortcut:

// ```text
// PEMDAS

// Parentheses
// Exponent
// Multiply/Divide
// Addition/Subtraction
// ```

// ---

// # Interview Questions

// ```javascript
// console.log("5" + 1);
// ```

// Output:

// ```javascript
// "51"
// ```

// ---

// ```javascript
// console.log("5" - 1);
// ```

// Output:

// ```javascript
// 4
// ```

// ---

// ```javascript
// console.log(2 + 3 * 4);
// ```

// Output:

// ```javascript
// 14
// ```

// ---

// ```javascript
// console.log((2 + 3) * 4);
// ```

// Output:

// ```javascript
// 20
// ```

// ---

// # Final Rule

// ```text
// Use === instead of ==

// Remember:
// () > ** > * / % > + -

// Strings + Numbers can cause automatic type conversion.

// When confused, use typeof() to check the data type.
// ```
