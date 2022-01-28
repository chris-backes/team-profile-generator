const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer.js");

test("creates a new engineer", () => {
	const engineer = new Engineer(
		"Jeff Bridges",
		"785902",
		"Jeff.Bridges@business.com",
		"jeff-bridges"
	);

	expect(engineer.name).toBe("Jeff Bridges");
	expect(engineer.id).toBe("785902");
	expect(engineer.email).toBe("Jeff.Bridges@business.com");
	expect(engineer.github).toBe("jeff-bridges");
});
