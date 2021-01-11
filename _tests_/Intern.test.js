const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Amelia Snow', 'x12345', 'jasmineakbari@yahoo.com');

    expect(intern.name).toBe('Amelia Snow');
    expect(intern.id).toBe('x12345');
    expect(intern.email).toBe('jasmineakbari@yahoo.com');
})

test('retrieves Interns role', () => {
    const intern = new Intern('Amelia Snow', 'x12345', 'jasmineakbari@yahoo.com');

    expect(intern.getRole()).toEqual('<span class="oi" data-glyph="spreadsheet"></span> Intern');
});

test('retrieves Interns school', () => {
    const intern = new Intern('Amelia Snow', 'x12345', 'jasmineakbari@yahoo.com');

    expect(intern.getSchool()).toEqual(expect.any(String));
});