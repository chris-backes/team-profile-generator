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
	expect(engineer.email).toBe("Jeff.Bridges@business.com")
	expect(engineer.github).toBe("jeff-bridges")
	expect(engineer.getName()).toBe("Jeff Bridges");
	expect(engineer.getId()).toBe("785902");
	expect(engineer.getEmail()).toBe("Jeff.Bridges@business.com")
	expect(engineer.getRole()).toBe("Engineer")
	expect(engineer.getGithub()).toBe("jeff-bridges");
});