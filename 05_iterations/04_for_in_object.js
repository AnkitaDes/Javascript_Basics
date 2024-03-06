//for in loop
//Iterate over OBJECT
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut for ${myObject[key]}`);
}

//Iterate over ARRAY

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  console.log(programming[key]);
}

//Iterate over MAP
// map is not iteratable
const map = new Map();
map.set("IN", "India");
map.set("Fr", "France");
map.set("USA", "Unites States of America");
//console.log(map);
for (const key in map) {
  console.log(key);
}
