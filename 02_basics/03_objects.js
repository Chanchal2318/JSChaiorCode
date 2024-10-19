// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"chanchal",
    "fullName":"Chanchal Rajput",
    [mySym] : "myKey1",
    age:18,
    location:"Hyderabad",
    email:"bulbulrajput12@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Sunday"]
}
// console.log(JsUser.email);   // bulbulrajput12@gmail.com
// console.log(JsUser["email"]); // bulbulrajput12@gmail.com
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "eisikarajput228@gmail.com" 
// Object.freeze(JsUser) // If we want to freeze the value that means value doesn't get change.
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}
console.log(JsUser.greeting); // Hello JsUser
console.log(JsUser.greeting()); // [Function (anonymous)]
console.log(JsUser.greetingTwo()) // Hello JS user,chanchal