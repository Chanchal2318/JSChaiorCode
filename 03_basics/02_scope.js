//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// yeah access hojayega before initialization calling mai koi problem nhi  hogi or proper output milega.
console.log(addone(5)) // 6

function addone(num){
    return num + 1
}


// yha error aajayega expression wala functions ko before declaration call nhi karskta
addTwo(5)
const addTwo = function(num){
    return num + 2
}