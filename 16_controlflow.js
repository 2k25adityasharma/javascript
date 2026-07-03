// # JavaScript Control Flow (Important Notes)

// > **Control Flow** decides how JavaScript executes code based on conditions and loops.

// ---

// # 1. Comparison Operators

// These operators return a **Boolean** (`true` or `false`).

// | Operator | Meaning |
// |----------|---------|
// | `==` | Equal (checks value only) |
// | `===` | Strict Equal (checks value + type) |
// | `!=` | Not Equal |
// | `!==` | Strict Not Equal |
// | `>` | Greater Than |
// | `<` | Less Than |
// | `>=` | Greater Than or Equal |
// | `<=` | Less Than or Equal |

// ### Example

// ```javascript
// 5 == "5"     // true
// 5 === "5"    // false

// 10 > 5       // true
// 10 <= 5      // false
// ```

// ---

// # 2. Truthy & Falsy

// JavaScript converts values into `true` or `false` inside conditions.

// ## Falsy Values (Remember these)

// ```javascript
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
// ```

// Everything else is **Truthy**.

// ```javascript
// if ("Hello") {
//     console.log("Runs");
// }
// ```

// ---

// # 3. Logical Operators

// ## AND (&&)

// Returns `true` only if all conditions are true.

// ```javascript
// age >= 18 && hasLicense
// ```

// ---

// ## OR (||)

// Returns `true` if at least one condition is true.

// ```javascript
// isAdmin || isTeacher
// ```

// ---

// ## NOT (!)

// Reverses a boolean.

// ```javascript
// !true      // false
// !false     // true
// ```

// ---

// # 4. Short Circuit Evaluation

// ## AND (&&)

// Stops at the first falsy value.

// ```javascript
// console.log(false && "Hello");

// // false
// ```

// ---

// ## OR (||)

// Stops at the first truthy value.

// ```javascript
// console.log("" || "JS");

// // JS
// ```

// ---

// # 5. Nullish Coalescing (??)

// Returns the right value **only** if the left value is `null` or `undefined`.

// ```javascript
// let name = null;

// console.log(name ?? "Guest");
// ```

// Output

// ```
// Guest
// ```

// Difference

// ```javascript
// 0 || 100
// ```

// ```
// 100
// ```

// ```javascript
// 0 ?? 100
// ```

// ```
// 0
// ```

// ---

// # 6. Optional Chaining (?.)

// Safely accesses nested properties.

// ```javascript
// const user = {};

// console.log(user.address?.city);
// ```

// Output

// ```
// undefined
// ```

// Without `?.`

// ```javascript
// user.address.city
// ```

// Throws

// ```
// TypeError
// ```

// ---

// # 7. Ternary Operator

// Shortcut for `if...else`.

// ```javascript
// condition ? trueValue : falseValue;
// ```

// Example

// ```javascript
// let age = 20;

// let result = age >= 18 ? "Adult" : "Minor";
// ```

// ---

// # 8. switch Statement

// Best when comparing one variable against multiple values.

// ```javascript
// switch(day){

//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     default:
//         console.log("Invalid");
// }
// ```

// Always use `break` unless you intentionally want fall-through.

// ---

// # 9. break

// Stops the current loop or switch.

// ```javascript
// for(let i=1;i<=5;i++){

//     if(i==3)
//         break;

//     console.log(i);
// }
// ```

// Output

// ```
// 1
// 2
// ```

// ---

// # 10. continue

// Skips the current iteration.

// ```javascript
// for(let i=1;i<=5;i++){

//     if(i==3)
//         continue;

//     console.log(i);
// }
// ```

// Output

// ```
// 1
// 2
// 4
// 5
// ```

// ---

// # 11. return

// Ends function execution immediately.

// ```javascript
// function add(a,b){

//     return a+b;

//     console.log("Never runs");
// }
// ```

// ---

// # 12. Operator Precedence (Important)

// ```javascript
// ()
// ```

// ↓

// ```javascript
// !
// ```

// ↓

// ```javascript
// * / %
// ```

// ↓

// ```javascript
// + -
// ```

// ↓

// ```javascript
// < <= > >=
// ```

// ↓

// ```javascript
// == != === !==
// ```

// ↓

// ```javascript
// &&
// ```

// ↓

// ```javascript
// ||
// ```

// ↓

// ```javascript
// ??
// ```

// ↓

// ```javascript
// =
// ```

// Use parentheses `()` whenever expressions become complex.

// ---

// # Interview Questions

// ### Difference between == and ===

// ```javascript
// 5 == "5"     // true
// 5 === "5"    // false
// ```

// `==` checks only value.

// `===` checks both value and datatype.

// ---

// ### Difference between || and ??

// ```javascript
// 0 || 100
// ```

// Returns

// ```
// 100
// ```

// ```javascript
// 0 ?? 100
// ```

// Returns

// ```
// 0
// ```

// `||` works on **falsy** values.

// `??` works only on **null** and **undefined**.

// ---

// ### Difference between break and continue

// | break | continue |
// |--------|----------|
// | Exits the loop | Skips current iteration |
// | Loop ends | Loop continues |

// ---

// ### Difference between && and ||

// ```javascript
// true && false
// ```

// Returns

// ```
// false
// ```

// ```javascript
// true || false
// ```

// Returns

// ```
// true
// ```

// ---

// # Things to Remember

// - Prefer `===` instead of `==`.
// - Learn all **8 falsy values**.
// - Use `??` instead of `||` when setting default values.
// - Use `?.` to avoid `TypeError`.
// - Use the ternary operator for simple conditions only.
// - `break` exits the loop.
// - `continue` skips one iteration.
// - `return` exits a function immediately.