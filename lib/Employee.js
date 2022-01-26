const getEmail = require('./getEmail.js')

class Employee {
    constructor(name = ' ') {
        this.name = name;
        this.id = Math.floor(Math.random() * 900000 + 100000);
        this.email = getEmail(name);
    }
    getName() {

    }
    getId() {

    }
    getEmail() {

    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;