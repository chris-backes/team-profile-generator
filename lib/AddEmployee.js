const inquirer = require("inquirer");
const Manager = require('./lib/Manager.js')

let questions = [		
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
		message: "Waht is the Employee's numeric 8 digit ID",
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
]

function AddEmployees() {
    this.emply = [];

}

AddEmployees.prototype.initialize = function() {
	inquirer
	.prompt(
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
			message: "Waht is the Employee's numeric 8 digit ID",
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
			name: "phone",
			message: "What is the 10-digit office line?",
			validate: (phoneInput) => {
				return !!phoneInput
			}
		}
	)
	.then((inputData) => {
		this.name = new Manager(inputData.name, inputData.id, inputData.email)
	})
}