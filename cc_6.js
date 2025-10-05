class Employee {
    constructor (name,department,){
        this.name = name;
        this.department = department;
    }
    describe(){
        return `${this.name}works in this${this.department}`;
    }
}
class Manager extends Employee{
    constructor(name,department,teamSize){
        super(name,department,teamSize)
        this.name = name
        this.department = department
        this.teamSize = teamSize 
    }
    describe(){
        return `${this.name}works in this${this.department}with this team size${this.teamSize}`
    }
}
let newEmployees = [
    new Employee("Isabella", "Sales"),
    new Employee("Juan", "Production"),
];
let emp = new Employee(Maria, Design)
let man1 = new Manager(Sofia, Design)