const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Amelia Snow');

    expect(intern.name).toBe('Amelia Snow');
    expect(intern.id).toBe('x12345');
    expect(intern.email).toBe('jasmineakbari@yahoo.com');
    expect(intern.role).toBe('Intern');
})

test('retrieves Interns role', () => {
    const intern = new Intern('Amelia Snow');

    expect(intern.getRole()).toEqual('Role: Intern');
});

test('retrieves Interns school', () => {
    const intern = new Intern('Amelia Snow');

    expect(intern.getSchool()).toEqual(expect.any(String));
});