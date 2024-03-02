//let score = null; //typeof null => object

// type of Number(null) => number
// console.log (Number(null)) => 0;
//console.log(typeof NaN);

//let score = undefined;

//typeof undefined  => undefined
// type of Number(undefined) => number
// console.log (Number(undefined)) => NaN;

//let score = "33abc";

//typeof" 33abc"  => string
// type of Number(undefined) => number
// console.log (Number("33abc")) => NaN;

// let score = true;

// console.log(typeof score);

// let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// console.log(valueInNumber);

//typeof true  => boolean
// type of Number(true) => number
// console.log (Number(true)) => 1;

//typeof false  => boolean
// type of Number(boolean) => number
// console.log (Number(true)) => 0 ;

//"33"=> 33
//"33abc"=>NaN
//true=1; false=0

// let isLoggedIn = true;
// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // => true

//let isLoggedIn = "hitesh";
// let isLoggedIn = false;
// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // => false

// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn); // =>  true

// let isLoggedIn = 0;
// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // => false

// let isLoggedIn = "";
// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // => false

// let isLoggedIn = "hitesh";
// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // => true

// let isLoggedIn = "undefined";
// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // => true

// let isLoggedIn = null;
// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // => false

// let isLoggedIn = NaN;
// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // => false

// let isLoggedIn = {} or [];
// let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn); // => true

// let someNumber = 33;

// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

//****************************OPERATIONS*************************************
// let value = 3;
// let negValue = -value;
// //console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2); // 2raised to power 2
// console.log(2 / 2);
// console.log(2 % 2); //modulus gives the remainder of the operation

// let str1 = "Hello";
// let str2 = " Sam";

// let str3 = str1 + str2;
// console.log(str3); // Hello Sam

// Not a good way to use operators not used in production environments
//Code readability is of utmost importance

// console.log("1" + 2); // 12
// console.log(1 + "2"); //12
// console.log("1" + 3 + 2); //132 if opearation starts by string all numbers are converted to string and concatenated
// console.log(1 + 3 + "2"); // 42 if operation starts with number initial nums are added and then concatenated

// console.log(true); // true
// console.log(+true); // 1  true is boolean and + in front of it does increment and converts it to number
// //console.log(true+); // gives an error
// console.log(+""); // 0 plus convrts the empty string to its value which is 0

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 3;

let gameCounter = 100;
//gameCounter++;
++gameCounter;
console.log(gameCounter); //101

//prefix and postfix incremental counter
