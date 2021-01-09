const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id = '', email = '', role = '', officeNumber = '') {

        super(email);

        this.name = 'Ash Alpha';
        this.id = 'x1';
        this.role = 'Manager';
        this.officeNumber = '7777';
    }

    getOfficeNumber() {
        return `${this.officeNumber}`;
    }
}

module.exports = Manager;