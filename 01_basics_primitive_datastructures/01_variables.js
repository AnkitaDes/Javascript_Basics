const accountId = 14432;
let accountEmail = "sam@gmail.com";
var accountPassword = "12345";
accountCity = "NewYork";
let accountProvince;

// accountId = 134523; // Error: Assignment to constant variable.

accountEmail = "sam43@gmail.com";
accountPassword = "212121";
accountCity = "Toronto";

console.log(accountId);

/* Prefer not to use var 
because of block scope and functional scope issues
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountProvince,
]);
