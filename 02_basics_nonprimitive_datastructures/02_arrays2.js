const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Batman", "Flash"];

//PUSH
// marvelHeros.push(dcHeros);
// console.log("MarvelHeros:", marvelHeros);
// console.log(marvelHeros[3][1]);

//CONCAT
const allHeros = marvelHeros.concat(dcHeros);
console.log("MarvelHerosConcatdcHeros:", allHeros);

const allNewHerosSpread = [...marvelHeros, ...dcHeros];
console.log("AllNewHerosSpread:", allNewHerosSpread);

//FLAT
const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [3, 4, [5, 6, 7]]];
const usableAnotherArray = anotherArray.flat(Infinity);
console.log("UsableanotherArray:", usableAnotherArray);

//isArray check if the given datatype is array
console.log(Array.isArray("Spiderman"));

//If NOT Array convert into array // used to convert a string to array
// used to convert an object tp array but has to be specified array of keys or array of values

console.log(Array.from("Batman"));
console.log(Array.from({ name: "Flash" })); //If cannot convert returns an empty array

//Array.of // used to make an array of variables
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
