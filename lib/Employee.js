class Employee {
    constructor(name = "", id = "", email = "") {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return `ID: ${this.id}`;
    }
    
    getEmail() {
        return `${this.email}`;
    }
    
    getRole() {
        return `<span class="oi" data-glyph="people"></span> Employee`;
    }
}

module.exports = Employee;