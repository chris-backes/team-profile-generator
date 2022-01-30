const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates a new employee", () => {
	const employee = new Employee(
		"Jeff bridges",
		"785902",
		"Jeff.Bridges@business.com"
	);

	expect(employee.name).toBe("Jeff bridges");
	expect(employee.id).toBe("785902");
	expect(employee.email).toBe("Jeff.Bridges@business.com")
	expect(employee.getName()).toBe("Jeff Bridges");
	expect(employee.getId()).toBe("785902");
	expect(employee.getEmail()).toBe("Jeff.Bridges@business.com")
	expect(employee.getRole()).toBe("Employee");
});
