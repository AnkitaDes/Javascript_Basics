const { logLevel } = require("live-server");

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}
const sammy = new User("sammy@gmail.com", "123");
console.log(sammy.password);
