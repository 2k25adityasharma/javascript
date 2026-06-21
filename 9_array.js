// // arrays 
// const arr = [1, 2, 3, 4, 5]; 
// console.log(arr[0]); // 1
// console.log(arr.length); // 5

// arr.push(6); // add 6 to the end of the array
// console.log(arr); // [1, 2, 3, 4, 5, 6]
// arr.pop(); // remove the last element of the array
// console.log(arr); // [1, 2, 3, 4, 5]            
// arr.unshift(0); // add 0 to the beginning of the array
// console.log(arr);//  worst beacuse we have to shift all the elements to the right
  
// const newarr= arr.join (); // join the elements of the array with a hyphen
// console.log(newarr); //  string


// slice,splice
// const arr2 = [1, 2, 3, 4, 5];
// const newarr = arr2.slice(1,4)


// console.log(newarr); // [2, 3, 4]   slice does not modify the original array    
// console.log(arr2); // [1, 2, 3, 4, 5]  same as original array

// const newarr2 = arr2.splice(1, 4); // remove 4 elements starting from index 1
// console.log(newarr2); // [2, 3, 4,5]   splice modifies the original arra y
// console.log(arr2); // [1]  original array is modified





//2 
// const marvelHeroes = ['hawkeye', 'captain america']
// const dcHeroes = ['superman', 'batman', 'wonderr woman']

// marvelHeroes.push(dcHeroes)//vector inside vector
// console.log(marvelHeroes); 


// // if we a single array that constain all ement in both 

// const all = marvelHeroes.concat(dcHeroes)   // new arr but for 2 arrays
// console.log(all)

// const all2 =[...marvelHeroes,...dcHeroes]  // we add 2 or more arrays in a single array using spread operator 
// console.log(all2) 


console.log(Array.isArray("hello")); // false
console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']  convert string to array
console.log(Array.from({name: "john", age: 30}));  // empty array because object is not iterable
let a = 1;
let b = 2;
let c = 3;  
console.log(Array.of(a, b,c))