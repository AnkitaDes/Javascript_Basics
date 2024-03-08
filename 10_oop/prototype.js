// let myName = "javascript    ";

// console.log(myName.length);
// console.log(myName.truelength());
// property
// method
let myHeroes = ["thoe", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
//inject hero method in the object

Object.prototype.hero = function () {
  console.log(`Hero is present in all objects`);
};
// heroPower.hero();
//myHeroes.hero();

Array.prototype.heyHero = function () {
  console.log(`Hero says Hello`);
};
myHeroes.heyHero();
//heroPower.heyHero();

//INHERITANCE

const User = {
  name: "Hero",
  email: "hero.google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//MODERN SYNTAX

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Sammy       ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
};
anotherUsername.trueLength();
"Javascript".trueLength();
"react".trueLength();
