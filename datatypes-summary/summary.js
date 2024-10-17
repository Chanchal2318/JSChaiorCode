// Primitive - (Call by value -> there are copied)

// 7 types : String , Number , Boolean , null , undefined , Symbol(used for its uniqueness), BigInt

// Important :- JavaScript is dynamically typed, meaning that type checking happens during runtime, not compile time.


const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false




// Reference Type :- Non-primitive

// Arrays, Objects, Functions

let obj = {
    name:"Chanchal",
    age : 21
}

const myFunc = function () {
    console.log("Hi , Chanchal here...");
}

// Important for an Interview

// TypeOf

// 1. undefined -> undefined
// 2. null -> object
// 3. Boolean -> boolean 
// 4. Number -> number
// 5. String -> string
// 6. Object(native and does not implement [[call]]) -> object
// 7. Object(native or host and does implement [[call]]) -> function
// 8. Object(host and does not implement [[call]]) -> Implementation - defined except may not be "undefined","boolean","number", or "string".


// Explaination 0f 6 pt.

// Object (native and does not implement [[Call]]) -> object
// Native Object: A native object is an object that is defined by the JavaScript specification itself, such as Array, Date, Object, etc.

// [[Call]]: This is an internal method of JavaScript objects that determines whether the object can be called like a function (i.e., if it's callable).

// Does not implement [[Call]]: If an object does not implement [[Call]], it means that it is not callable (i.e., it cannot be invoked like a function).

// Example:

// js
// Copy code
// const obj = {};
// obj(); // TypeError: obj is not a function
// In this case, obj is a native object but does not implement [[Call]], so trying to call it like a function will throw an error. Thus, the type remains an object.


// Explaination of 7 pt.

// 7. Object (native or host and does implement [[Call]]) -> function
// Host Object: These are objects provided by the environment in which JavaScript runs (e.g., window in a browser, console in Node.js).

// Implements [[Call]]: If an object implements [[Call]], it means the object can be invoked as a function.

// Example:

// js
// Copy code
// function example() {}
// example(); // This is a function call
// Here, example is a native JavaScript object that implements [[Call]], so it is classified as a function.

// Host objects like document.querySelector or console.log are also callable because they implement [[Call]].


// Explaination of 8 pt.


// 8. Object (host and does not implement [[Call]]) -> Implementation-defined (except may not be "undefined", "boolean", "number", or "string")
// Host Object (without [[Call]]): Some host objects provided by the environment may not be callable, meaning they don't implement [[Call]].

// Implementation-defined: The behavior of these objects is defined by the environment or JavaScript engine in which the code is running, like a browser or Node.js.

// May not be "undefined", "boolean", "number", or "string": These host objects can't have types like undefined, boolean, number, or string. They still have to be objects but can have custom implementations depending on the environment.

// Example:

// js
// Copy code
// console.log(document); // In browsers, `document` is a host object.
// The document object in the browser is a host object and doesn’t implement [[Call]], meaning it can't be invoked like a function. Its behavior is defined by the browser, and its type is still an object.


// Summary:
// Native objects that are not callable: Just objects.
// Native/Host objects that are callable: Functions.
// Host objects that are not callable: Their behavior is implementation-defined, but they are still objects and can't be primitive types like undefined, boolean, number, or string.




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//                                                  MEMORY DISCUSSION

//Stack is used in (Primitive Type ) and Heap is used in (Non-Primitive Type)

// Here is an example of Non-primitive type , so everything is stored into a stack.

let myYoutubeName = "chanchalrajput"
let anotherName = myYoutubeName
anotherName = "cryan booster"
console.log(myYoutubeName); // chanchalrajput
console.log(anotherName);  // cryan booster

// In line 110 , we give value of myYoutubeName = chanchalrajput
// In line 111, we give anotherName = myYoutubeName that means a copy of myYoutubeName 
// that means chanchalrajput is given into anotherName because everything is stored into a stack.
// In  stack , value is copied from one variable into another variable . 
// No two variables, refer to the same value
// That's why, In 113 line , myYoutubeName = chanchalrajput
// In 114 line , anotherName = cryan booster because there is an updation only in the anotherName and myYoutubeName's value is not belong
//  to the updated value of anotherName. Hence, myYoutubeName is not affected from an updation.



// Here is an example of Non-primitive type , which is stored into Heap Memory

// Here , Variables are stored into a stack but their values are accessed from a heap memory by references.

let userOne = {
    email: "user@google.com",
    upi : "user@bl"
}

let userTwo = userOne
userTwo.email = "chanchal@google.com"

console.log(userOne.email); // chanchal@google.com
console.log(userTwo.email); // chanchal@google.com

// Here , both variables values has been changed because they referred to the same value and on updation the value has been changed . That's why , because of referencing the value has been updated.



