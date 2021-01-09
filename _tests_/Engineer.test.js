const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Miyuki Miyamoto');

    expect(engineer.name).toBe('Miyuki Miyamoto');
    expect(engineer.id).toBe('x1234');
    expect(engineer.email).toBe('jasmineakbari@yahoo.com');
    expect(engineer.role).toBe('Engineer')
})

test('gets the engineer GitHub username', () => {
    const engineer = new Engineer('Miyuki Miyamoto')

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('retrieves engineer role', () => {
    const engineer = new Engineer('Miyuki Miyamoto');

    expect(engineer.getRole()).toEqual('Role: Engineer');
});