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