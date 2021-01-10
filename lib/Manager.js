const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id = '', email = '', officeNumber = '') {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return `${this.officeNumber}`;
    }

    getRole() {
        return '<span class="oi" data-glyph="briefcase"></span> Manager'
    }
}

module.exports = Manager;