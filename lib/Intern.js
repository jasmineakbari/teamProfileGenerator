const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '', role = '', school = '') {
        super(email)

        this.name = 'Amelia Snow';
        this.id = 'x12345';
        this.role = 'Intern';
        this.school = 'UCF';
    }

    getSchool() {
        return `${this.school}`;
    }

}

module.exports = Intern;