//function

// function sayMyName() {
//   console.log("Sammy");
// }
// sayMyName; // function reference
// sayMyName(); // function execution

//variables used while creatinga function definition are called parameters // num1, num 2
//Values passed during function execution are called arguments //3, 4

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }
// const result = addTwoNumbers(3, 4); //7
// console.log("Result:", result); //undefined
// addTwoNumbers(3, "4"); //34
// addTwoNumbers(3, "a"); //3a
// addTwoNumbers(3, null); //3

// function addTwoNumbers(num1, num2) {
//   let result = num1 + num2;
//   console.log("Sammy"); //code before the return is executed
//   return result;
//   console.log("Sammy"); // no code runs after the return statement
// }
// const result = addTwoNumbers(3, 4); //7
// console.log("Result:", result); //undefined

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }
// const result = addTwoNumbers(3, 4); //7
// console.log("Result:", result); //undefined

//you can add a default value to username as sam

function loginUserMessage(username = "sam") {
  if (!username) {
    //if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("Sammy"));
//console.log(loginUserMessage(""));
console.log(loginUserMessage());
