const Employee = require("./Employee");

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
		this.Engineer = "Engineer";
	}
	getGithub() {
		return this.github;
	}
	getRole() {
		return "Engineer";
	}
	getIcon() {
		return `<i class="fas fa-glasses"></i>`;
	}
}

module.exports = Engineer;
