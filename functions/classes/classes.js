'use strict'
class User{
  constructor(username, email, password) {
    this.username = username;
    this.emal = email;
    this.password = password;
  }

  register() {
    console.log(this.username + ' is now registered.');
  }
}
let bob = new User('Bob', 'bob@email.com', '12345')
bob.register();
