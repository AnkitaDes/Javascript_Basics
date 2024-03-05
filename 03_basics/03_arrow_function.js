const user = {
  username: "Sammy",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage(); // Sammy, welcome to website
// //this is used to access any variable in the current context
// user.username = "Olivia";
// user.welcomeMessage();
// console.log(this);

// function one() {
//   let username = "Olivia";
//   console.log(this);
//   console.log(this.username); //undefined
// }
// one();
// this cannot be used inside a function
// this works fine inside an object

// const two = function () {
//   let username = "Olivia";
//   console.log(this);
//   console.log(this.username);
// };

// two(); //undefined

// const two = () => {
//   let username = "Olivia";
//   console.log(this);
//   console.log(this.username);
// };

// two(); //undefined

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(2, 5));//7

//IMPLECIT RETURN
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(2, 5)); //7

//If you use curly braces{}, need to write return
//If you use (), no need to write return

// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(2, 5)); //7

//If you want to return an object
const addTwo = (num1, num2) => ({
  username: "Sammy",
});
console.log(addTwo(2, 5)); //7
