const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Alena');

    expect(employee.name).toBe('Alena');
    expect(employee.id).toBe('x123');
    expect(employee.email).toBe('jasmineakbari@yahoo.com');
});

