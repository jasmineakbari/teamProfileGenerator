const { tsImportEqualsDeclaration } = require('@babel/types');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '') {
        super(name, id, email)

        this.github = github;
    }

    getGithub() {
        return `${this.github}/`;
    }

    getRole() {
        return '<span class="oi" data-glyph="people"></span> Engineer'
    }
}

module.exports = Engineer;