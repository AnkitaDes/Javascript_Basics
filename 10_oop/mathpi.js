const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// console.log(Math.PI);
// MAth is a module
// Math.PI = 5;
// console.log(Math.PI);

// const mynewObj= Object.create(null);
const user = {
  name: "Sammy",
  logInAttempts: 5,
  isloggedIn: true,

  orderLaptop: function () {
    console.log(`Laptop unavailable`);
  },
};
console.log(user);
console.log(Object.getOwnPropertyDescriptor(user)); //undefined
console.log(Object.getOwnPropertyDescriptor(user, "name"));
/*

{
  value: 'Sammy',
  writable: true,
  enumerable: true,
  configurable: true
}

*/

// Define the properties
Object.defineProperty(user, "name", {
  //writable: false,
  enumerable: false,
});
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// /*
// {
//   value: 'Sammy',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }
// */

// for (let [key, value] of user) {
//   console.log(`${key}:${value}`);
// }
// // TypeError: user is not iterable

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key}:${value}`);
  }
}

//Browser objects
