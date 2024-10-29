// Immediately Invoked Function Expression(IIFE)

(function chai(){
    // named IIFE 
    console.log(`DB CONNECTED`);
})();

// Global scope ka pollution sa problem hoti hai kyi baar toh uss polltuion ko hatana ka liya IIFE ka use krta hai hmm
// ()() -> 1 paranthesis mai defination likhta hai or dusra sa immediately invoked krdeta hai

( (name) => {
    // unnamed IIFE
    console.log(`DB connected two ${name}`);
    
})('hitesh'); // DB CONNECTED two hitesh