// You are to create a collection of employee's information for your company. Each employee has the following attributes:
// 1. Name
// 2. Job title
// 3. Salary
// 4. Status
let employees = []
function Employees(Name, Jobtitle, Salary, Status) {
    // use this keyword to reference each object that is created from this constructor
    this.name = Name
    this.jobtitle = Jobtitle
    this.salary = Salary
    this.status = Status
    this.status = "Full Time"
    this.printEmployeeForm = function(){
        console.log("Name: " +this.name, "Job Title: " + this.jobtitle, "Salary: " + this.salary, "Status: " + this.status)
    }
}
// instantiate (create new object from) our constructor with the "new" keyword and pass in the parameters 
    var Emily = new Employees("Emily", "supervisor", "80,000", "Full Time")
    var David = new Employees("David", "Manager", "$100,000", "Full Time")
    var Devin = new Employees("Devin", "Senior manager", "$150,000", "Full Time")


// Override the status attribute of one of them to either "Part Time" or "Contract"
Emily.status = "Part Time";
// console.log(Emily)

//Call the printEmployeeForm method for each employee

// Put the generated employees into the employees array using whichever method you prefer.
Emily.printEmployeeForm()
David.printEmployeeForm()
Devin.printEmployeeForm()

employees.push(Employees)
//console.log(employees)






