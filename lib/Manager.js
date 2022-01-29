const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
		this.role = "Manager"

	}
	getOfficeNumber() {
		let temp = this.officeNumber.match(/[0-9]/g).join("")
		return "(" + temp.substring(0, 3) + ")-" + temp.substring(3, 6) + "-" + temp.substring(6);
	}

	getRole() {
		return "Manager";
	}
}

module.exports = Manager;
