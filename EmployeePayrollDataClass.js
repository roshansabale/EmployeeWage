class EmployeePayrollData {
    //Property

    //Constructor using normal 
    // constructor(id, name, salary) {
    //     this.id = id;
    //     this.name = name;
    //     this.salary = salary;
    // }

    //constructor using spread operator which set value as per provided values
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.postalCode = params[5];
    }

    //Getter and setter
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect!!'
    }

    get id() { return this._id; }
    set id(id) {
        let idRegex = RegExp('[1-9]+[0-9]?');

        if (idRegex.test(id))
            this._id = id;
        else throw 'ID is incorrect'
    }

    get salary() { return this._salary; }
    set salary(salary) {
        let salaryRegex = RegExp('[1-9]+[0-9]?');

        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw 'salary is invalid'
    }

    get gender() { return this._gender; }
    set gender(gender) {
        try {
            let genderRegex = RegExp('^[m|f|M|F]{1}$');
            if (genderRegex.test(gender)) {
                this._gender = gender;
            } else throw 'gender is invalid'
        } catch (e) { console.error(e); }
    }

    get postalCode() { return this._postalCode; }
    set postalCode(postalCode) {
        try {
            let postalRegex = RegExp('^[0-9]{3}[ ]?[0-9]{3}$');
            if (postalRegex.test(postalCode)) {
                this._postalCode = postalCode;
            } else throw 'Postal code is incorrect'
        } catch (e) { console.error(e); }
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        var currentDate = new Date();
        try {
            if (startDate <= currentDate) {
                this._startDate = startDate;
            } else throw "Invalid Date";
        } catch (e) { console.error(e); }
    }

    //method
    toString() {
        const option = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", option);
        return "id= " + this.id + ", name= " + this.name + ", salary= " + this.salary + ", Gender: " +
            this.gender + ", Start Date: " + empDate + ", PostCode: " + this.postalCode + ", Email: " + this.email;
    }
}

let employeePayrollData = new EmployeePayrollData(100, "Mark", 300000, "M", new Date(), "451 245", );
console.log(employeePayrollData.toString());

try {
    employeePayrollData.id = 1000;
    employeePayrollData.name = "Roshan";
    employeePayrollData.salary = 10;
    employeePayrollData.gender = "M";
    employeePayrollData.postalCode = "115784";
    employeePayrollData.startDate = new Date();
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}
let employeePayrollData1 = new EmployeePayrollData(100, "Joffera", 350000, "F", new Date(), "422003");
console.log(employeePayrollData1.toString());