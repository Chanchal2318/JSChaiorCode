const accountId = 14553;
let accountEmail = "chanchal123@gmail.com"
var accountPassword = "2345"
accountCity = "Ghaziabad"
let accountState;

// accountId = 2  //Not allowed (Assignment to constant variable is not possible)
console.log(accountId);
accountEmail="dfghjk@gmail.com"
accountPassword="1234565432"
accountCity = "Banglore"

/*
Preferred not to use var 
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])