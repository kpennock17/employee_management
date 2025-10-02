class Employee {
    constructor (name,department,level = "Associate"){
        this.name = name;
        this.department = department;
    }
    describe(){
        return `${this.name}works in this${this.department}`;
    }
}