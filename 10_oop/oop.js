const user = {
  username: "Sammy",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    //console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

console.log(user);
//console.log(user.username);
//console.log(user.getUserDetails());

console.log(this); //empty object in browser it is the window object
//this referes to the current execution context

//CONSTRUCTOR FUNCTION
// const promiseOne = new Promise();
// const date = new Date();
// //new keyword is a constructor function
// // helps to make multiple instances from 1 object literal

function User(username, loginCount, isLoggedIn) {
  (this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn);
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

// const userOne = User("Sammy", 12, true);
// const userTwo = User("React", 11, false);
// console.log(userOne);
// username: 'React',
// loginCount: 11,
// isLoggedIn: false

const userOne = new User("Sammy", 12, true);
const userTwo = new User("React", 11, false);
// console.log(userOne);
// console.log(userTwo);
//when we use the new keyword
//1. a new object is created
//2. a constructor function is called
//3. this key word all arguments are injected into the object
//4. we can access the argument in the function
console.log(userOne.constructor);
