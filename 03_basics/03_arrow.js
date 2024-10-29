const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  yaha iska o/p :- {} yeah aaya hai pr aagr yhi hamm browser pr chlata toh iska o/p mai window object print hota kyuki browser mai window object hi global object hai jiski wajah sa hamm window ka different - different methods ko access krksta hai

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  // undefined issa hm yha aisa use nhi krskta blki issa aisa object mai use krskta hai

// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }


// Arrow function 
const chai =  () => {
    let username = "hitesh"
    console.log(this);  // {}
    console.log(this.username); // undefined
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit return mai na toh paranthesis use hota hai or na i return keyword use hota hai. simple ek line ka o/p print krskta hai.
// Or to avoid confusion we can use () banana brackets to wrap up the single line statement.

const addTwo = (num1, num2) =>  num1 + num2 // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})  // this is the way to return an object by implicit return.


// Explicit return mai body ko likhta time {} paranthesis ka aandr hi likh skta hai or return keyword use krna compulsory hota hai.

console.log(addTwo(3, 4)) // 7


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()