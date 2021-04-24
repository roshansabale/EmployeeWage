class EmployeePayrollData {
    //Property
    id;
    salary;
    gender;
    startDate;

    //Constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //Getter and setter
    get name() { return this._name; }
    set name(name) {
        console.log("Setter called!!")
        this._name = name;
    }

    //method
    toString() {
        return "id= " + this.id + ", name= " + this.name + ", salary= " + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(100, "Mark", 300000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 200;
employeePayrollData.name = "Roshan";
console.log(employeePayrollData.toString());