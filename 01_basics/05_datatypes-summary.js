// DataTypes
// Depending on how the data is stored in memory and accessed we have two types of data
// Primitive Type
//- Call by Value - when we talk about "call by value", we're talking about how data gets passed around in your code.
//- when these are used somewhere the  changes made in the value occurs in the copy the original value is unchanged

// 7 Types
// 1. String - for textual data enclosed in " "
// 2. Number - for numerical values
// 3. Boolean - True/ False
// 4. Null - empty
// 5. Undefined - represents a variable that that has been declared but not assigned a value
// 6. Symbol - a unique and immutable data type that is often used as an identifier for object properties
// 7. BigInt- big values  or scientific values not covered in numbers

// function paintCar(car) {
//   car = "red"; // This is like painting the copy of the car
//   return car;
// }

// let myCar = "blue"; // This is your car
// paintCar(myCar); // You give a copy of your car to the function
// console.log(myCar);

const score = 100;
const scoreValue = 100.4;

let city = "Toronto";

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); //false

const bigNumber = 131243487358103868760n;

//Non-Primitive or Reference Type
//- Allocate a reference in the memory

// Array
// Objects
//Functions

const heros = ["Superman", "Batman", "Spiderman"];
let myObj = {
  name: "Sam",
  age: 22,
};

const myFunction = function () {
  console.log("Hello World :)");
};

console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof city); // String
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); //object
console.log(typeof id); // symbol
console.log(typeof bigNumber); // bigint
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); //function
