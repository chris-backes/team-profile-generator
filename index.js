const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const { writeFile, copyFile } = require("./utils/generate-site.js");
const generatePage = require("./src/pageTemplate.js");
let nextEmply = "Manager"
let emply = [];


const promptEmployee = (personalInfo) => {
	console.log(`
    ==================
    Add a New Employee
    ==================
    `);
	return inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is the employee's first and last name?",
				validate: (nameInput) => {
					return nameInput.match(/\s/).length === 1;
				},
			},
			{
				type: "input",
				name: "id",
				message: "What is the Employee's numeric 8 digit ID",
				validate: (idInput) => {
					return idInput.length === 8 && !/\D/.test(idInput);
				},
			},
			{
				type: "input",
				name: "email",
				message: "What is the employee's email address?",
				validate: (emailInput) => {
					return /@/.test(emailInput);
				},
			},
			{
				type: "input",
				name: "github",
				message: "What is this employee's github username?",
				validate: (githubInput) => {
					return !!githubInput;
				},
				when: () => {
					return nextEmply === "Engineer";
				},
			},
			{
				type: "input",
				name: "school",
				message: "What school does this intern current attend?",
				validate: (schoolInput) => {
					return !!schoolInput;
				},
				when: () => {
					return nextEmply === "Intern";
				},
			},
			{
				type: "input",
				name: "phone",
				message: "What is the 10-digit office line?",
				validate: (phoneInput) => {
					return !!phoneInput;
				},
				when: () => {
					return nextEmply === "Manager";
				},
			},
			{
				type: "list",
				name: "addEmployee",
				message: "Would you like to enter another employee?",
				choices: ["No", "Intern", "Engineer"]
			},
		])
		.then((data) => {
			emply.length === 0
				? emply.push(
						new Manager(data.name, data.id, data.email, data.phone)
				  )
				: nextEmply === "Intern"
				? emply.push(
						new Intern(data.name, data.id, data.email, data.school)
				  )
				: emply.push(
						new Engineer(
							data.name,
							data.id,
							data.email,
							data.github
						)
				  );
            nextEmply = data.addEmployee
			if (data.addEmployee !== "No") {
				return promptEmployee();
			} else {
				return emply;
			}
		});
};

promptEmployee()
	.then((personnelInfo) => {
		return generatePage(personnelInfo);
	})
	.then((pageData) => {
		return writeFile(pageData);
	})
	.then((writeResponse) => {
		console.log(writeResponse);
		return copyFile();
	})
	.then((copyResponse) => {
		console.log(copyResponse);
	})
	.catch((err) => {
		console.log(err);
	});
