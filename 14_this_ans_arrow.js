const user = {
    username: "adii",
    age: 19,
    welcome: function() {
        // 'this' refers to the object calling the method (user)
        console.log(`${this.username} , hello`); 
    }
}

user.welcome(); // Output: adii , hello
console.log(this); // Output: {} (in Node.js) OR Window (in Browser)



// CASE 1: Standard Function (Normal declaration or expression)
function show() {
    let username = "adii";
    console.log(this.username); 
}
show(); // ❌ Output: undefined


///////////////////////////////////////////////////////
const adii=()=>{
    let user = 'adii'
    console.log(this)
}
adii()
// arrow function  also give {} or window in  browser


const add = (num1,num2)=>{
    return num1 +num2
}
console.log(add(2,3))


const addShort = (num1, num2) => (num1 + num2)  // return () kardeta without type return
console.log(addShort(2, 3));