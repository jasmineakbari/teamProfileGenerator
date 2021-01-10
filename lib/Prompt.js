const { writeFile, copyFile } = require('../utils/generate-site.js');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Employee = require('./Employee');
const generatePage = require('../src/page-template');
const inquirer = require('inquirer');

class Prompts {
    constructor() {
        this.employees = [];
    }
    
    promptUser() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your Team Manager name? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Team Manager name.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter your Team Manager Employee ID (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Team Manager Employee ID.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter your Team Manager contact email (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Team Manager contact email.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter your Team Manager Office Number (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Team Manager Office Number.');
                            return false;
                        }
                    }
                },
            ])
            // add data to empty employee array
            .then(({ name, id, email, officeNumber }) => {
                this.employees.push(new Manager(name, id, email, officeNumber));

                this.getEmployee();
            }) 

            
    }

    getEmployee() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Who in the team is an Employee? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter an Employee name.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter your Employees ID (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Employees ID.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter your Employees contact email (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Employees contact email.');
                            return false;
                        }
                    }
                },
            ])
            // add data to empty employee array
            .then(({ name, id, email }) => {
                this.employees.push(new Employee(name, id, email));

                this.getEngineer();
            })
    }

    getEmployee() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Who is your team Engineer? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your team Enginners name.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter your Engineers ID (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Engineers ID.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter your Engineers contact email (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Engineers contact email.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter your Engineers github username (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Engineers github username.');
                            return false;
                        }
                    }
                },
            ])
            // add data to empty employee array
            .then(({ name, id, email, github }) => {
                this.employees.push(new Engineer(name, id, email, github));

                this.getIntern();
            })
    }

    getEmployee() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Who is your team Engineer? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your team Enginners name.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter your Engineers ID (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Engineers ID.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter your Engineers contact email (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Engineers contact email.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter your Engineers github username (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Engineers github username.');
                            return false;
                        }
                    }
                },
            ])
            // add data to empty employee array
            .then(({ name, id, email, github }) => {
                this.employees.push(new Engineer(name, id, email, github));
            })
            .then(teamData => {
                return generatePage(teamData);
            })
            .then(writeFileResponse => {
                console.log(writeFileResponse);
                return copyFile();
            })
              .then(copyFileResponse => {
                console.log(copyFileResponse);
            })
            .catch(err => {
                console.log(err);
            });
    }       
};

module.exports = Prompts();

