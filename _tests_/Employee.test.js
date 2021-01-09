const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Alena Skye');

    expect(employee.name).toBe('Alena Skye');
    expect(employee.id).toBe('x123');
    expect(employee.email).toBe('jasmineakbari@yahoo.com');
    expect(employee.role).toBe('Employee')
});

test('retrieves employee name', () => {
    const employee = new Employee('Alena Skye', 'x123', 'jasmineakbari@yahoo.com', "Employee");

    expect(employee.getName()).toEqual(expect.any(String));
});

test('retrieves employee id', () => {
    const employee = new Employee('Alena Skye', 'x123', 'jasmineakbari@yahoo.com', "Employee");

    expect(employee.getId()).toEqual(expect.any(String));
});

test('retrieves employee email', () => {
    const employee = new Employee('Alena Skye', 'x123', 'jasmineakbari@yahoo.com', "Employee");

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('retrieves employee role', () => {
    const employee = new Employee('Alena Skye', 'x123', 'jasmineakbari@yahoo.com', "Employee");

    expect(employee.getRole()).toEqual(expect.any(String));
});