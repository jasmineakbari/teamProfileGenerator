const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Ash Alpha');

    expect(manager.name).toBe('Ash Alpha');
    expect(manager.id).toBe('x1');
    expect(manager.email).toBe('jasmineakbari@yahoo.com');
    expect(manager.role).toBe('Manager')
});

test('retrieves Managers role', () => {
    const manager = new Manager('Ash Alpha');

    expect(manager.getRole()).toEqual('Role: Manager');
});

test('retrieves Managers Office Number', () => {
    const manager = new Manager('Ash Alpha');

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
})