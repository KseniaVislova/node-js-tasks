const EventEmitter = require('events');

class User extends EventEmitter {
    constructor(name, password) {
        super();
        this.name = name;
        this.password = password;
    }

    sayHi() {
        console.log(`Hi! My name is ${this.name}`)
    }
}

const user = new User('Vasya', 12345);

user.on('greetings', user.sayHi);

user.emit('greetings');