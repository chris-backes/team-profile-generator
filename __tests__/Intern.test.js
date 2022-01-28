const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern.js");

test("creates a new intern", () => {
	const intern = new Intern(
		"Jeff Bridges",
		"785902",
		"Jeff.Bridges@business.com",
		"LMU Munich"
	);

	expect(intern.name).toBe("Jeff Bridges");
	expect(intern.id).toBe("785902");
	expect(intern.email).toBe("Jeff.Bridges@business.com");
	expect(intern.school).toBe("LMU Munich");
});
