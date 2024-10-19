// const tinderUser = new Object() // singleton object
const tinderUser = {}; // {} non-singleton object
// console.log(tinderUser); // {} empty object

// App kisi bhi tarah sa object declare karo value same hi rhegi

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // {userfullname : {firstname : 'hitesh', lastname : 'choudhary'}}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } It takes object inside the another object
// const obj3 = Object.assign({}, obj1, obj2, obj4)// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } It only storres key-value pair of both the objects.

const obj3 = {...obj1, ...obj2} // spreading the key-value pair of both the objects
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor : instructor} = course

// console.log(courseInstructor); // hitesh
// console.log(instructor); // hitesh

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
