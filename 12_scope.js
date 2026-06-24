function one() {
    const name = 'adii'; // Born inside 'one'. Visible to 'one' and 'two'.

    function two() {
        const age = 20;  // Born inside 'two'. ONLY visible inside 'two'.
        
        // This works! 'two' can look outside to find 'name', 
        // and 'age' is right here inside the room.
        console.log(name, age); 
    }   
    
    console.log(name); // Works! 'name' is in the same room.

    console.log(age);  
    //  ERROR: Crash! Function 'one' is outside 'two'. 
    // It cannot look inside 'two' to find 'age'.
}

console.log(name); 
// ERROR: Crash! Global scope cannot look inside function 'one' to find 'name'.


/*********************************** */
// 1. Call it UP here (Before it is written)
greet(); // Output: "Hello Adii!"

// 2. Declaration DOWN here
function greet() {
    console.log("Hello Adii!");  // error
}