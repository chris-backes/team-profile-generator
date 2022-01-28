const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates a new employee", () => {
	const employee = new Employee(
		"Jeff Bridges",
		"785902",
		"Jeff.Bridges@business.com"
	);

	expect(employee.name).toBe("Jeff Bridges");
	expect(employee.id).toBe("785902");
	expect(employee.email).toBe("Jeff.Bridges@business.com");
});
