// # JavaScript Type Conversion Notes

// ## What is Type Conversion?

// Type conversion means converting a value from one data type to another.

// Examples:

// ```javascript
// let age = "19";

// console.log(Number(age)); // 19
// ```

// ```javascript
// let num = 100;

// console.log(String(num)); // "100"
// ```

// ---

// # Common Conversion Functions

// ```javascript
// Number()
// String()
// Boolean()
// parseInt()
// parseFloat()
// ```

// ---

// # Convert to Number

// Use `Number()` when you want to convert a value to a number.

// ```javascript
// let age = "19";

// console.log(Number(age)); // 19
// ```

// Examples:

// ```javascript
// console.log(Number("100"));    // 100
// console.log(Number("99.5"));   // 99.5
// console.log(Number(true));     // 1
// console.log(Number(false));    // 0
// console.log(Number(null));     // 0
// ```

// ---

// # Important: How to Check if Conversion Worked

// ```javascript
// let value = "19";

// let num = Number(value);

// console.log(typeof num);
// ```

// Output:

// ```javascript
// number
// ```

// This confirms that the value is now a Number.

// ---

// # Invalid Number Conversion

// ```javascript
// console.log(Number("Aditya"));
// ```

// Output:

// ```javascript
// NaN
// ```

// NaN = Not a Number

// Check:

// ```javascript
// console.log(Number.isNaN(Number("Aditya")));
// ```

// Output:

// ```javascript
// true
// ```

// ---

// # Convert to String

// Use `String()` to convert a value into a string.

// ```javascript
// let age = 19;

// let strAge = String(age);

// console.log(strAge);
// console.log(typeof strAge);
// ```

// Output:

// ```javascript
// "19"
// string
// ```

// Examples:

// ```javascript
// console.log(String(100));
// console.log(String(true));
// console.log(String(false));
// console.log(String(null));
// ```

// ---

// # Convert to Boolean

// Use `Boolean()` to convert a value into true or false.

// ```javascript
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// ```

// Examples:

// ```javascript
// console.log(Boolean("Aditya")); // true
// console.log(Boolean(""));       // false
// console.log(Boolean(100));      // true
// console.log(Boolean(0));        // false
// console.log(Boolean(null));     // false
// console.log(Boolean(undefined));// false
// ```

// ---

// # Truthy Values

// These become true:

// ```javascript
// "hello"
// 1
// 100
// []
// {}
// "0"
// "false"
// ```

// ---

// # Falsy Values

// There are only a few falsy values:

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

// ---

// # parseInt()

// Extracts integer values.

// ```javascript
// console.log(parseInt("100"));      // 100
// console.log(parseInt("100px"));    // 100
// console.log(parseInt("99.99"));    // 99
// ```

// ---

// # parseFloat()

// Extracts decimal values.

// ```javascript
// console.log(parseFloat("99.99"));     // 99.99
// console.log(parseFloat("99.99px"));   // 99.99
// ```

// ---

// # Difference Between Number() and parseInt()

// ```javascript
// console.log(Number("100px"));   // NaN
// console.log(parseInt("100px")); // 100
// ```

// `Number()` requires the whole value to be a valid number.

// `parseInt()` reads until it finds invalid characters.

// ---

// # typeof After Conversion

// ```javascript
// let num = Number("123");

// console.log(typeof num);
// ```

// Output:

// ```javascript
// number
// ```

// ```javascript
// let str = String(123);

// console.log(typeof str);
// ```

// Output:

// ```javascript
// string
// ```

// ---

// # Rule to Remember

// Convert to Number:

// ```javascript
// Number(value)
// ```

// Convert to String:

// ```javascript
// String(value)
// ```

// Convert to Boolean:

// ```javascript
// Boolean(value)
// ```

// Check Data Type:

// ```javascript
// typeof value
// ```

// Check Invalid Number:

// ```javascript
// Number.isNaN(value)
// ```

// ---

// # Interview Shortcut

// ```text
// String → Number  => Number()

// Number → String  => String()

// Any Value → Boolean => Boolean()

// Check Type => typeof

// Invalid Number => NaN
// ```

// Important:

// ```javascript
// let score = "33";

// let valueInNumber = Number(score);

// console.log(valueInNumber);      // 33
// console.log(typeof valueInNumber); // number
// ```

// If `typeof` returns `"number"`, then the conversion was successful and the value is stored as a Number.
