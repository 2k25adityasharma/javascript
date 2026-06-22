 function adii(){
    console.log("hello adii")
 }

function add(a, b){
    return a + b;
}
console.log(add(5, 3)); // Output: 8 

function calculatecartprise(...prices){   // rest operator to take multiple arguments   
    return prices
}
console.log(calculatecartprise(10, 20, 30)); // Output: [10, 20, 30]

const user ={
    name :'adii',
    age: 20,
    location: "india"
}
function handleObjects(user){
     console.log(user.name); // Output: adii
     console.log(user.age); 
     console.log(`user name is ${user.name}`)
}

handleObjects(user)