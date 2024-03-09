//ES6
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }
// const sammy = new User("Sammy", "sammy@gmail.com", "123");
// console.log(sammy.encryptPassword());
// console.log(sammy.changeUsername());

//BEHIND THE SCENE

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const olivia = new User("Olivia", "olivia@gmail.com", "123");

console.log(olivia.encryptPassword());
console.log(olivia.changeUsername());
