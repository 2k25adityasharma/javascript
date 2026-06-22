
//singleton objects
 

// add symbol
const sym1 = Symbol("id")
// object literal
const adii={
    name :"adii",
    age: 20,
    location: "india",
    email:"adii@example.com",
    islogin: true,

    ///ading siMBOL
    [sym1]:12345
      
}
// 2 type to acces  
console.log(adii.name); // dot notation

console.log(adii["email"]); // bracket notation
console.log(adii[sym1])
console.log(adii)  /// whole object


//chaning 
adii.location = "usa";
console.log(adii.location); // usa
Object.freeze(adii); // freeze the object to prevent modification




const obj1={
    1: "one",
    2: "two",
    3: "three"
}
const obj2={
    4: "four",
    5: "five",
    6: "six"
}   

const  obj3= Object.assign({}, obj1, obj2)  // merge 2 objects into a new object
console.log(obj3)  

//we use spread operator to merge 2 objects into a new object

const obj4 = {...obj1, ...obj2}
console.log(obj4)


// destructturing
const course = {
    coursename: "javascript",
    duration: "3 months",
    level: "beginner",
    instructor: "adii"
      
}
const {coursename, duration, level, instructor} = course;
console.log(coursename, duration, level, instructor);
console.log(course.duration)


 