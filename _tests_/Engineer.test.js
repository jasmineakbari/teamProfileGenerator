const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Miyuki Miyamoto', 'x1234', 'jasmineakbari@yahoo.com');

    expect(engineer.name).toBe('Miyuki Miyamoto');
    expect(engineer.id).toBe('x1234');
    expect(engineer.email).toBe('jasmineakbari@yahoo.com');
})

test('gets the engineer GitHub username', () => {
    const engineer = new Engineer('Miyuki Miyamoto' , 'x1234', 'jasmineakbari@yahoo.com')

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('retrieves engineer role', () => {
    const engineer = new Engineer('Miyuki Miyamoto' , 'x1234', 'jasmineakbari@yahoo.com');

    expect(engineer.getRole()).toEqual('<span class="oi" data-glyph="people"></span> Engineer');
});