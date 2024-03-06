//const tinderUser = new Object();//singleton object //create object using a constructor

//Create an Object
const tinderUser = {}; //non-singleton object
// Add key and values
tinderUser.id = "abc123";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

// Access the key and values
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Olivia",
      lastname: "White",
    },
  },
};
//console.log(regularUser.fullname.userfullname.firstname);

// Merge or combine 2 Objects
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
// Simply create a new obj obj3 and add obj1 and obj2 to it
// creates a problem where we get obj inside an object
//const obj3 = { obj1, obj2 };
///console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//Method 2 Object.assign
//Syntax 1
// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//Syntax 2
//optional paramemter empty object better syntax guarantees that the resultant is an object

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//Method 3 Spread Operator
const obj3 = { ...obj1, ...obj2 };
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Access property of an obj in the array of objects
const users = [
  {
    id: 1,
    email: "sam@gmail.com",
  },
  {
    id: 2,
    email: "joe@gmail.com",
  },
  {
    id: 3,
    email: "gim@gmail.com",
  },
];

// console.log(users[2].email);
// console.log(tinderUser);

// //Very Important
// //Get the keys of an object in an array
// console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]

// //Get all values of an object in an array
// console.log(Object.values(tinderUser)); //[ 'abc123', 'Sammy', false ]

// // Get all properties in an array
// console.log(Object.entries(tinderUser)); //[ [ 'id', 'abc123' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// //Check if the property exists in the object
// //Returns a boolean

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
// console.log(tinderUser.hasOwnProperty("isLog")); //false

//OBJECT DESTRUCTURING // saving the value of a property in a variable

const course = {
  courseName: "javascript",
  price: "999",
  courseInstructor: "Sammy",
};
// console.log(course.courseInstructor);

const { courseInstructor } = course;
console.log(courseInstructor);
const { courseInstructor: instructor } = course;
console.log(instructor);

// React props destructuring

// const navbar = (prop.company) => {

// };

// const navbar = ({company}) => {

// };

// navbar (company = "Sammy")

//CONCEPT API //When you want to put your work on others head it is called API
// Menu card in a restaurent is an API documentation you just order the good you need not to know hoe to prepare the dish
//values we get from backend is in the JSON format which is an object {} without the name where key is a string and value is a string

// {
//   "name": "Sammy",
//   "courseName": "Javascript",
//   "proce":"free",
// }

[{}, {}, {}];
