const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js')

test("creates a new manager", () => {
	const manager = new Manager(
		"Jeff Bridges",
		"785902",
		"Jeff.Bridges@business.com",
		"(448)6755309"
	);

	expect(manager.name).toBe("Jeff Bridges");
	expect(manager.id).toBe("785902");
	expect(manager.email).toBe("Jeff.Bridges@business.com");
	expect(manager.officeNumber).toBe("(448)6755309");
	expect(manager.getName()).toBe("Jeff Bridges");
	expect(manager.getId()).toBe("785902");
	expect(manager.getEmail()).toBe("Jeff.Bridges@business.com")
	expect(manager.getRole()).toBe("Manager")
	expect(manager.getOfficeNumber()).toBe("(448)-675-5309");
});