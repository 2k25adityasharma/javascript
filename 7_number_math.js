let a = 100   // internally it is a number

let b = new Number(a)   // confirm it is a number 

console.log(a); // 100
console.log(b); // [Number: 100]
console.log(b.toString()); // 100
console.log(b.toFixed(2)); // 100.00

let c = 123.456789;

console.log(c.toFixed(2)); // 123.46    returns a string    
console.log(c.toPrecision(3)); // 123   returns a string

// math functions

 console.log(Math.round(123.2)); // 123 
 console.log(Math.abs(-5)); // 5
 console.log(Math.sqrt(16));    // 4            
 console.log(Math.pow(2, 3));  // 8      
 cosole.log(Math.max(10, 20, 5)); // 20
 console.log(Math.min(10, 20, 5)); // 5 


 console.log(Math.random()*10);    // random number between 0 and 10.
 console.log(Math.random()*10+1);    // random number between 1 and 10.

 const max = 100;
    const min = 40;
    const randomNum =Math.floor(Math.random() * (max - min) + min);
    console.log(randomNum); // random number between 40 and 100.