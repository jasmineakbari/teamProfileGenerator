const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Ash Alpha', 'x1', 'jasmineakbari@yahoo.com');

    expect(manager.name).toBe('Ash Alpha');
    expect(manager.id).toBe('x1');
    expect(manager.email).toBe('jasmineakbari@yahoo.com');
});

test('retrieves Managers role', () => {
    const manager = new Manager('Ash Alpha' , 'x1', 'jasmineakbari@yahoo.com');

    expect(manager.getRole()).toEqual('<span class="oi" data-glyph="briefcase"></span> Manager');
});

test('retrieves Managers Office Number', () => {
    const manager = new Manager('Ash Alpha' , 'x1', 'jasmineakbari@yahoo.com');

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
})