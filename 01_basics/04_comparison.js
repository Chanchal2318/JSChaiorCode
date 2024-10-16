console.log(null > 0)  //false
console.log(null == 0); //false
console.log(null >= 0); //true  

// The reason is that an equality check == and comparisons >, < , >= , <= work differently.
// Comparisons convert null to a number , treating it as 0. 
// That's why, null >= 0 is true  and ohers give an ans false

console.log(undefined == 0); //false
console.log(undefined > 0);  //false
console.log(undefined < 0);  //false


// strict check ===
// It checks value along with its datatype

console.log("2" === 2);   //false

console.log("2" > 1); //true
console.log("02" > 1);  //true


