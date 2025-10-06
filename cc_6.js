class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages the ${this.department} department with a team of ${this.teamSize}.`;
  }
}

let newEmployees = [
  new Employee("Isabella", "Sales"),
  new Employee("Juan", "Production"),
];

let emp = new Employee("Maria", "Design");
let man1 = new Manager("Sofia", "Design", 5);

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach((employee) => {
      console.log(employee.describe());
    });
  }
}
let myCompany = new Company();
myCompany.addEmployee(emp);
myCompany.addEmployee(man1);
newEmployees.forEach(e => myCompany.addEmployee(e));

myCompany.listEmployees();
