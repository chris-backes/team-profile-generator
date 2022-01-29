const inquirer = require("inquirer");

class Employee {
	constructor(name, id, email,) {
		this.name = name;
		this.id = id;
		this.email = email;
	}
	
	getName() {
		return this.name.split(" ").map(element => element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()).join(" ")
	}
	getId() {
		return this.id.trim();
	}
	getEmail() {
		return this.email.trim();
	}
	getRole() {
		return "Employee";
	}
}

module.exports = Employee;
