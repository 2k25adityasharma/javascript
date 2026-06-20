// # Stack Memory vs Heap Memory

// JavaScript stores data in memory in two main ways:

// ## Primitive Data Types → Stack Memory

// Primitive values are stored directly in stack memory.

// ```javascript
// let age = 19;
// let name = "Aditya";
// ```

// Each variable gets its own copy of the value.

// Example:

// ```javascript
// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20
// ```

// What happened?

// 1. `a` stores `10`.
// 2. `b` gets a copy of `10`.
// 3. Changing `b` does not affect `a`.

// Because primitives are copied by value.

// ---

// ## Reference (Non-Primitive) Data Types → Heap Memory

// Objects, Arrays, and Functions are stored in heap memory.

// The variable itself stores a reference (address) to the data.

// Example:

// ```javascript
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr2[0] = 100;

// console.log(arr1); // [100, 2, 3]
// console.log(arr2); // [100, 2, 3]
// ```

// What happened?

// 1. The array is created in heap memory.
// 2. `arr1` stores the reference (address) of that array.
// 3. `arr2 = arr1` copies the reference, not the actual array.
// 4. Both variables point to the same array.
// 5. Changing `arr2` also changes `arr1`.

// Because reference types are copied by reference.

// ---

// # Visual Representation

// ## Primitive (Stack)

// ```text
// a = 10
// b = a

// Stack:
// a -> 10
// b -> 10
// ```

// Both variables have separate copies.

// ---

// ## Reference (Heap)

// ```text
// let arr1 = [1,2,3];
// let arr2 = arr1;
// ```

// ```text
// Stack:
// arr1 ----\
//           \
//            ----> Heap: [1,2,3]
//           /
// arr2 ----/
// ```

// Both variables point to the same array in heap memory.

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

// * Stored as values.
// * Copied by value.
// * Use Stack Memory.

// Reference Types:

// ```javascript
// Object
// Array
// Function
// ```

// * Stored in Heap Memory.
// * Variables store references (addresses).
// * Copied by reference.

// Interview Shortcut:

// ```text
// Primitive  → Stack → Copy by Value

// Reference → Heap → Copy by Reference
// ```
