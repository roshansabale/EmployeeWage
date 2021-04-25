class EmployeePayrollData {
    //Property
    id;
    salary;
    gender;
    startDate;

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
    }

    //Getter and setter
    get name() { return this._name; }
    set name(name) {
        console.log("Setter called!!")
        this._name = name;
    }

    //method
    toString() {
        const option = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", option);
        return "id= " + this.id + ", name= " + this.name + ", salary= " + this.salary + ", Gender: " +
            this.gender + ", Start Date: " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(100, "Mark", 300000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 200;
employeePayrollData.name = "Roshan";
console.log(employeePayrollData.toString());
let employeePayrollData1 = new EmployeePayrollData(100, "Joffera", 350000, "Male", new Date());
console.log(employeePayrollData1.toString());