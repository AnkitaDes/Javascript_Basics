class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createdId() {
    return `123`;
  }
}

const sam = new User("sam");
//console.log(sam.createdId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

console.log(Teacher.createdId());

const olivia = new Teacher("Olivia", "olivia@gmail.com");
olivia.logMe();
//console.log(olivia.createdId());
