//if

// if (condition){

// }

// condition === true code runs
// condition === false code not executed

//comparisons
// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//   console.log(`executed`);
// }

// const temperature = 41;
// if (temperature === 41) {
//   console.log("temperature less than 50");
// } else {
//   console.log("temperature greater than 50");
// }

// <, >, <=, >=, ==, !=, ===,!==,

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power:${power}`);
// }
// console.log(`User power:${power}`);

//Short Hand Notation
//Implicit Scope
//not readable code do not use
//const balance = 1000;
// if (balance > 500) console.log("TEST");
// if (balance > 500) console.log("TEST"), console.log("TEST2");

// Multiple conditions
// const balance = 1000;
// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else console.log("less than 1200");

//Real Life Examples

const isUserLoggedIn = true;
const debitcard = true;
if (isUserLoggedIn && debitcard && 2 == 3) {
  console.log("Allow to buy the course");
}

const loggedInFromEmail = true;
const loggedInFromGmail = false;

if (loggedInFromEmail || loggedInFromGmail) {
  console.log("User logged in ");
}

// &&  and  both true
// ||  or  one should be true

// connditional rendering in React
