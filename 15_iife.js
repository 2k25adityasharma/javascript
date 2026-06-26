//Use Case A: Data Privacy & Avoiding Global Scope Pollution


// standard syntax
(function() {
    console.log("I run instantly!");
})();

// Arrow function IIFE syntax
(() => {
    console.log("I also run instantly!");
})();

// ifu want to pass para meter then
(function(name){
    console.log(`my name is ${name}`)
})("adii");

((name) => {
      console.log(`my name is ${name}`)
})("adiii")