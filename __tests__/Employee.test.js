const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js')

test('creates a new employee', () => {
    const employee = new Employee('Jeff Bridges');

    expect(employee.name).toBe('Jeff Bridges')
    expect(employee.email).toBe('Jeff.Bridges@business.com')
})