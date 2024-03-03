const name = "Olivia";
const repoCount = 50;

console.log(name + repoCount + " Value"); // Bad way of concatenating strings // Not recommended

//STRING INTERPOLATION
//Back Ticks
//Place Holders that can hold variables
// Can add methods like (.toUpperCase()) to the variables
console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Olivia-js-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("j"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "     javascript     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://javascript.com/olivia%20white";
console.log(url.replace("%20", "-"));

console.log(url.includes("sam"));

console.log(gameName.split("-"));
