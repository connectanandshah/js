const accountId = 1910
let accountEmail = "shahanandnp@gmail.com"
var accountPassword = "12345"
accountCity = "Janakpur"
let accountState;

// accountId = 2 not allowed

accountEmail = "aanuxd@gmail.com"
console.log(accountId);
console.log(accountEmail);

/*
prefer not to use var bcuz of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity])