class Employee {
    constructor (name,department,level = "Associate"){
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