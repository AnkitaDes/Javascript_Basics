//{} block scope {}function if else for loop
// anything outside {} is global scope
// variables declared outside the {} are in global scope and can be accessed anywhere

//variables inside the block scope cannot be accessed outside
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a); //10
// console.log(b); //20
// console.log(c); //30

// var c = 300;
// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }

// //console.log(a); //ReferenceError: a is not defined
// //console.log(b); // ReferenceError: b is not defined
// console.log(c); //30

// let a = 300;
// if (true) {
//   let a = 10;
//   const b = 20;
//   console.log("INNER:", a); //INNER: 10
// }

// // console.log(a); //300

// function one() {
//   const username = "Sammy";
//   function two() {
//     const website = "Youtube";
//     console.log(username);
//   }
//   //console.log(website);
//   two();
// }
// one();

// if (true) {
//   const username = "Sam";
//   if (username === "Sam") {
//     const website = " Youtube";
//     console.log(username + website);
//   }
//   //console.log(website);
// }
// //console.log(username);

//********************   INTERESTING CONCEPT     **************** */
//NORMAL FUNCTION
// It is hoisted meaning can be called before function declaration/defining a function
// function addOne(num) {
//   return num + 1;
// }
// addOne(5);

// addOne(5);
// function addOne(num) {
//   return num + 1;
// }

//FUNCTION EXPRESSION
//function stored in a variable
// it is not hoisted thus gives an error when called or executed before declaration
//ReferenceError: Cannot access 'addTwo' before initialization

// addTwo(6);
// const addTwo = function (num) {
//   return num + 2;
// };
