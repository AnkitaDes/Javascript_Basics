//IMMEDIATELY INVOKED FUNCTION EXPRESSION IIFE

// sometimes we do not want the variables from the GLOBAL scope to pollute the variables in the FUNCTIONAL scope and thus we use IIFE

// An Immediately Invoked Function Expression (IIFE) is a function in JavaScript that runs as soon as it is defined. The name comes from the fact that these functions are immediately invoked or executed.

// Here's a simple example of an IIFE:

(function () {
  console.log("This is an IIFE!");
})();

// ;
// In this example, the function is defined and then immediately called. The surrounding parentheses ( ) are used to treat the function as an expression. The trailing parentheses () cause the function to be immediately executed or invoked.

// The main reason to use an IIFE is to obtain data privacy. Any variables declared within the IIFE cannot be accessed from the outside world, because they are not added to the global object. This helps avoid variable collisions on the global scope and helps to keep code modular and maintainable.

// function one() {
//   console.log(`DB CONNECTED`);
// }
// one();

(function one() {
  //named IIFE
  console.log(`DB CONNECTED`);
})();
((name) => {
  console.log(`DB TWO CONNECTED to ${name}`);
})("Sammy");
