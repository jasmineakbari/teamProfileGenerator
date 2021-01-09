const { tsImportEqualsDeclaration } = require('@babel/types');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', role = '', github = '') {
        super(email)

        this.name = 'Miyuki Miyamoto';
        this.id = 'x1234';
        this.role = 'Engineer'
        this.github = 'github.com/jasmineakbari'
    }

    getGithub() {
        return `${this.github}`;
    }
}

module.exports = Engineer;