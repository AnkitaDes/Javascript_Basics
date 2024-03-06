// const name = "Olivia";
// const repoCount = 50;

// console.log(name + repoCount + " Value"); // Bad way of concatenating strings // Not recommended

// //STRING INTERPOLATION
// //Back Ticks
// //Place Holders that can hold variables
// // Can add methods like (.toUpperCase()) to the variables
// console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);
// console.log(
//   `Hello my Name is ${name.toUpperCase()} and my repo count is ${repoCount}`
// );

// // String Methods

// const gameName = new String("Olivia-js-com");

// // console.log(gameName[0]);
// // console.log(gameName.__proto__);
// // console.log(gameName.toUpperCase());
// // console.log(gameName.length);
// // console.log(gameName.charAt(3));
// // console.log(gameName.indexOf("j"));

// const newString = gameName.substring(0, 4);
// console.log(newString);

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

// const newStringOne = "     javascript     ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://javascript.com/olivia%20white";
// console.log(url.replace("%20", "-"));

// console.log(url.includes("sam"));

// console.log(gameName.split("-"));

// *******************  PRACTICE STRING METHODS   **********************************
//charAt(index):

//Given a string, return the last character of the string.

let str1 = " Hello World";
let lastChar = str1.charAt(str1.length - 1);
console.log("lastChar:", lastChar); // d

//Given a string, return the character at the middle index of the string.
let str2 = "Jonah";
let middleIndex = Math.floor(str2.length / 2);
let middleChar = str2.charAt(middleIndex);
console.log("middleChar:", middleChar);

//concat(string2):

// Given two strings, concatenate them with a space in between.

let str3 = "Good";
let str4 = "Day";
let joinStr = str3.concat(" ", str4, " ", "Everyone");

console.log(joinStr);

// Given an array of strings, concatenate all the strings into one single string.

let array1 = ["Sun", "Moon", "Stars"];
let joinArrayStr = array1[0].concat(array1[1], array1[2]);
console.log(joinArrayStr);

//slice(startIndex, endIndex):

//Given a string, return the first half of the string.

//Given a string, return all characters after the first occurrence of ' ' (space).
