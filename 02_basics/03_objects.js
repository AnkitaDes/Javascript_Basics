//singleton
Object.create;
// Object Literals
const mySym = Symbol("key1");

const JsUser = {
  name: "Olivia",
  "full name": "Olivia White",
  // mySym: "myKey1",
  [mySym]: "myKey1",
  age: 18,
  location: "NewYork",
  email: "olivia@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//Retrive values for the keys from an object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(JsUser.full name);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);
console.log(typeof mySym);

//Change the values of the keys

JsUser.email = "olivia@outlook.com";

// Object.freeze(JsUser);
JsUser.email = "olivia@google.com";

console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

console.log(JsUser.greeting());
JsUser.greetingTwo = function () {
  console.log(`Hello JS user ${this.name}`);
};
console.log(JsUser.greetingTwo());
