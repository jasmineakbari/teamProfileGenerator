const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Alena');

    expect(employee.name).toBe('Alena');
    expect(employee.id).toBe('x123');
    expect(employee.email).toBe('jasmineakbari@yahoo.com');
});

test('retrieves employee name', () => {
    const employee = new Employee('Alena', 'x123', 'jasmineakbari@yahoo.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('retrieves employee id', () => {
    const employee = new Employee('Alena', 'x123', 'jasmineakbari@yahoo.com');

    expect(employee.getId()).toEqual(expect.any(String));
});

test('retrieves employee email', () => {
    const employee = new Employee('Alena', 'x123', 'jasmineakbari@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('retrieves employee role', () => {
    const employee = new Employee('Alena', 'x123', 'jasmineakbari@yahoo.com');

    expect(employee.getRole()).toEqual(expect.any(String));
});