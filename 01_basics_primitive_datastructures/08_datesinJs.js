// Dates

let myDate = new Date(); //Creating a new instance of object
// console.log(typeof myDate); //Object
// console.log("myDate:", myDate);
// console.log("myDate.toString():", myDate.toString());
// console.log("myDate.toISOString:", myDate.toISOString());
// console.log("myDate.toJSON:", myDate.toJSON());
// console.log("myDate.toLocaleDateString:", myDate.toLocaleDateString());
// console.log("myDate.toLocaleTimeString:", myDate.toLocaleTimeString());
// console.log("myDate.toTimeString:", myDate.toTimeString());
// console.log("myDate.toUTCString:", myDate.toUTCString());
// console.log("myDate.getTimeZoneOffset:", myDate.getTimezoneOffset());

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Date.now()); //gives time instance in milliseconds
console.log(Math.floor(Date.now() / 1000)); // converts current timestamp in seconds and gets rid of hte decimal values

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    timeZone: "America/New_York",
  })
);
