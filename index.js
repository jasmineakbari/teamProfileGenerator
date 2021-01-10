const { writeFile, copyFile } = require('./utils/generate-site');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');

class Prompt {
    constructor(teamData) {
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

    getEngineer() {
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

    getIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Who is your team Intern? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your team Interns name.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter your Interns ID (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Interns ID.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter your Interns contact email (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Interns contact email.');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school is your intern currently attending? (Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter your Interns current School Name.');
                            return false;
                        }
                    }
                },
            ])
            // add data to empty employee array
            .then(({ name, id, email, school }) => {
                this.employees.push(new Intern(name, id, email, school));
            })
            // import date to page template
            .then(teamData => {
                return console.log(this.employees);
            })
            //.then(pageHTML => {
                //return writeFile(pageHTML);
            //})
            //create the file in dist folder
            //.then(writeFileResponse => {
                //console.log(writeFileResponse);
                //return copyFile();
            //})
              //.then(copyFileResponse => {
                //console.log(copyFileResponse);
            //})
            //.catch(err => {
                //console.log(err);
            //});
    }       
};

module.exports = new Prompt().promptUser();