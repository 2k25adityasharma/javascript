// # JavaScript Loops: `for...of`, `for...in`, and `forEach()`

// These three are commonly used for iterating, but they have different purposes.

// ---

// # 1. `for...of` Loop

// Used to iterate over **values** of an iterable object.

// Works with:
// - Arrays ✅
// - Strings ✅
// - Maps ✅
// - Sets ✅

// **Syntax**

// ```javascript
// for (let value of iterable) {
//     // code
// }
// ```

// ### Array Example

// ```javascript
// const arr = [10, 20, 30];

// for (let value of arr) {
//     console.log(value);
// }
// ```

// Output

// ```
// 10
// 20
// 30
// ```

// ---

// ### String Example

// ```javascript
// const str = "Hello";

// for (let ch of str) {
//     console.log(ch);
// }
// ```

// Output

// ```
// H
// e
// l
// l
// o
// ```

// ---

// # 2. `for...in` Loop

// Used to iterate over **keys (property names)** of an object.

// Works best with:
// - Objects ✅

// Can work with arrays, but **not recommended**.

// **Syntax**

// ```javascript
// for (let key in object) {
//     // code
// }
// ```

// ### Object Example

// ```javascript
// const student = {
//     name: "Aditya",
//     age: 20,
//     branch: "AIML"
// };

// for (let key in student) {
//     console.log(key, student[key]);
// }
// ```

// Output

// ```
// name Aditya
// age 20
// branch AIML
// ```

// ---

// ### Array Example (Not Recommended)

// ```javascript
// const arr = [10, 20, 30];

// for (let index in arr) {
//     console.log(index);
// }
// ```

// Output

// ```
// 0
// 1
// 2
// ```

// It returns **indexes**, not values.

// To get values:

// ```javascript
// for (let index in arr) {
//     console.log(arr[index]);
// }
// ```

// ---

// # 3. `forEach()` Method

// `forEach()` is an **array method**.

// Works only with:
// - Arrays ✅

// Cannot be used with objects directly.

// **Syntax**

// ```javascript
// array.forEach(function(value, index) {

// });
// ```

// ---

// ### Example

// ```javascript
// const arr = [10, 20, 30];

// arr.forEach(function(value) {
//     console.log(value);
// });
// ```

// Output

// ```
// 10
// 20
// 30
// ```

// ---

// ### Using Arrow Function

// ```javascript
// const arr = [10, 20, 30];

// arr.forEach((value) => {
//     console.log(value);
// });
// ```

// ---

// ### Access Index

// ```javascript
// const arr = [10, 20, 30];

// arr.forEach((value, index) => {
//     console.log(index, value);
// });
// ```

// Output

// ```
// 0 10
// 1 20
// 2 30
// ```

// ---

// # Difference

// ## `for...of`

// Returns **values**.

// ```javascript
// const arr = [5, 10, 15];

// for (let value of arr) {
//     console.log(value);
// }
// ```

// Output

// ```
// 5
// 10
// 15
// ```

// ---

// ## `for...in`

// Returns **keys/indexes**.

// ```javascript
// const arr = [5, 10, 15];

// for (let index in arr) {
//     console.log(index);
// }
// ```

// Output

// ```
// 0
// 1
// 2
// ```

// ---

// ## `forEach()`

// Returns values one by one through a callback.

// ```javascript
// const arr = [5, 10, 15];

// arr.forEach((value) => {
//     console.log(value);
// });
// ```

// Output

// ```
// 5
// 10
// 15
// ```

// ---

// # Can We Use break or continue?

// ## `for...of`

// ```javascript
// for (let value of [1,2,3,4]) {

//     if (value === 3)
//         break;

//     console.log(value);
// }
// ```

// ✅ Works

// ---

// ## `for...in`

// ```javascript
// for (let key in obj) {

//     if (key === "age")
//         continue;

// }
// ```

// ✅ Works

// ---

// ## `forEach()`

// ```javascript
// arr.forEach((value) => {

//     if (value === 3)
//         break;
// });
// ```

// ❌ Error

// You **cannot** use:
// - `break`
// - `continue`
// - `return` (to stop the entire loop)

// inside `forEach()`.

// ---

// # When to Use Which?

// | Situation | Best Choice |
// |-----------|-------------|
// | Iterate over array values | `for...of` |
// | Iterate over object properties | `for...in` |
// | Perform an operation on every array element | `forEach()` |
// | Need `break` or `continue` | `for` or `for...of` |
// | Need indexes and values | `forEach()` or `arr.entries()` with `for...of` |

// ---

// # Interview Questions

// ### Difference between `for...of` and `for...in`

// | `for...of` | `for...in` |
// |------------|------------|
// | Returns values | Returns keys/indexes |
// | Used for arrays, strings, maps, sets | Used for objects |
// | Doesn't work on plain objects | Best for objects |

// ---

// ### Difference between `for...of` and `forEach()`

// | `for...of` | `forEach()` |
// |------------|-------------|
// | Loop statement | Array method |
// | Can use `break`/`continue` | Cannot use `break`/`continue` |
// | Works with arrays, strings, maps, sets | Works only with arrays |
// | Supports `await` in async loops | Doesn't wait for async callbacks |

// ---

// # Quick Revision

// | Loop | Returns | Works On | `break`/`continue` |
// |------|---------|----------|--------------------|
// | `for...of` | Values | Arrays, Strings, Maps, Sets | ✅ Yes |
// | `for...in` | Keys/Indexes | Objects (mainly) | ✅ Yes |
// | `forEach()` | Values via callback | Arrays only | ❌ No |

// ---

// # Easy Trick to Remember

// - **`for...of` → OF = Values OF the collection**
// - **`for...in` → IN = Keys IN the object**
// - **`forEach()` → Execute a callback for EACH array element**