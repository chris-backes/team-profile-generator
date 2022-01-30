const Employee = require("./Employee");

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
		this.role = "Intern"
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return "Intern";
	}
	getIcon() {
		return `<i class="fas fa-user-graduate"></i>`
	}
}

module.exports = Intern;
