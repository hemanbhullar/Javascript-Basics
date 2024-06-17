const accountId = 144553
let accountEmail = "heman@google.com"
var accountPassword = "12345" //Here is the problem of hoisting

accountCity = "Jaipur" //This can be possible in javascript

let accountState; //undefined -> Here Value is not defined.

// accountId = 2; not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

{
    //block scope
}

console.log(accountId);

/*
Prefered Not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])