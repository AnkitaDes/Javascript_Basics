//INHERITANCE

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const sammy = new Teacher("Sammy", "sammy@gmail.com", "123");
sammy.logMe();
sammy.addCourse();

const olivia = new User("Olivia");
olivia.logMe();
console.log(sammy === olivia);
console.log(sammy instanceof User);
console.log(sammy instanceof Teacher);
