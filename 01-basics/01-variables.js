const accountId = 14456
let accountEmail = "tushar.jangir@example.com"
var accountPassword = "12345"
let accountCity = "Jaipur"
let accountState = "Rajasthan";


accountPassword = "54321"
accountCity = "Mumbai"
accountEmail = "tushar.jangir@newexample.com"

// console.log(accountPassword, accountCity, accountEmail);

/*
prefer not to use var
for variable declaration as it has some issues with block scope and hoisting.
*/


console.table([accountId, accountEmail, accountPassword, accountCity])