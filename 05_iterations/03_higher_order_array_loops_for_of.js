//For of loop

//["", "", ""]
// [{}, {}, {}]

//Iterate over ARRAY
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

//Iterate over STRING

const greetings = "Hello World!";
for (const greet of greetings) {
  console.log(`Each character of greetings is ${greet}`);
}

//Iterate over MAPS
// object with key value pairs
//remembers the original order of insertion of key values
// no duplicate values all unique

const map = new Map();
map.set("IN", "India");
map.set("Fr", "France");
map.set("USA", "Unites States of America");
console.log(map);
for (const [key, value] of map) {
  console.log(key, ":-", value);
}

//Iterate over OBJECTS

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}
//TypeError: myObject is not iterable
