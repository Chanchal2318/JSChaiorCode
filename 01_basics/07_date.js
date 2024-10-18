let myDates = new Date()
console.log(myDates);  // 2024-10-18T15:19:01.519Z
console.log(myDates.toString()); // Fri Oct 18 2024 15:19:01 GMT+0000 (Coordinated Universal Time)
console.log(myDates.toDateString()); // Fri Oct 18 2024
console.log(myDates.toISOString()); //  2024-10-18T15:19:01.519Z
console.log(myDates.toJSON());  // 2024-10-18T15:19:01.519Z
console.log(myDates.toLocaleString());  // 10/18/2024, 3:19:01 PM
console.log(myDates.toLocaleTimeString()); // 3:19:01 PM
console.log(typeof myDates); // object

let myCreatedDate = new Date(2024,10,18)
console.log(myCreatedDate);
console.log(myDates.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1729265623266 time in ms from 1 jan 1970

// Time in seconds without decimal value

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear()); // 2024
console.log(newDate.getMonth()); // 9 -> oct , In js months start from 0 and ends upto 11
console.log(newDate.getDay()); // FRI -> 5 


