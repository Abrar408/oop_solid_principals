class Department{
    constructor(manager,employeeList){
        this.manager = manager
        this.employeeList = []
    }
    managerName(){
        console.log(`${this.manager} is the manager of this department.`)
    }
    employeeCount(){
        console.log(`There are ${this.employeeList.length} employees in this department.`)
    }
    printEmployeeList(){
        console.log(this.employeeList)
    }
}

class HR extends Department{
    constructor(manager,employeeList){
        super(manager,employeeList)
        this.employeeList.push(manager)
    }
    hire(employeeName){
        this.employeeList.push(employeeName)
        console.log(`Welcome to the team, ${employeeName}`)
    }
    fire(employeeName){
        if(this.employeeList.indexOf(employeeName) >= 0){
            this.employeeList.splice((this.employeeList.indexOf(employeeName)),1)
            console.log(`Bye bye, ${employeeName}`)
        }
        else{
            console.log(`${employeeName} does not exist in this department`)
        }
    }
    promoteToManager(employeeName){
        if(this.employeeList.indexOf(employeeName) >= 0){
            this.manager = employeeName
            console.log(`New Manager ${employeeName}`)
        }
        else{
            console.log(`${employeeName} does not exist in this department`)
        }
    }
}

let contour = new HR("Zargham")

contour.managerName()
contour.hire("Hassan")
contour.printEmployeeList()
// contour.fire("Hassan")
// contour.printEmployeeList()
contour.promoteToManager("Hassan")
