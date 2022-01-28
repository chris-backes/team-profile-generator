const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js')

test("creates a new manager", () => {
	const manager = new Manager(
		"Jeff Bridges",
		"785902",
		"Jeff.Bridges@business.com",
		"867-5309"
	);

	expect(manager.name).toBe("Jeff Bridges");
	expect(manager.id).toBe("785902");
	expect(manager.email).toBe("Jeff.Bridges@business.com");
	expect(manager.officeNumber).toBe("867-5309");
});