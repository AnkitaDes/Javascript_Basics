//Best comparison
console.log(2 > 1); //true
console.log(2 >= 1); // false
console.log(2 < 1); // false
console.log(2 != 1); // true

//Not a good practice need to be avoided
console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); //false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

//STRICT CHECK checks the number as wellas datatype
console.log("2" === 2); // false
