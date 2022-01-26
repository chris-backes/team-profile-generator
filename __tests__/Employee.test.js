const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js')

test('creates a new employee', () => {
    const employee = new Employee('Jeff');

    expect(employee.name).toBe('Jeff')
})