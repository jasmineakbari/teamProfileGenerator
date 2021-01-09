class Employee {
    constructor(name = "", id = "", email = "", role = "") {
        this.name = "Alena";
        this.id = "x123";
        this.email = "jasmineakbari@yahoo.com";
        this.role = "Employee"
    }

    getName() {
        return `Name: ${this.name}`;
    }

    getId() {
        return `Id: ${this.id}`;
    }
    
    getEmail() {
        return `Email: ${this.email}`;
    }
    
    getRole() {
        return `Role: ${this.role}`;
    }
}

module.exports = Employee;