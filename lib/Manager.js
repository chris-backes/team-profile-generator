const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name = '') {
        super(name)
        this.officeNumber = "555-555-5555"
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager