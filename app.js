
function Employee(employeeID,fullName,department,level,salary){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level=level;
    this.imageurlPath = "";
    this.salary = salary;
}



const employee1 = new Employee('1000','Ghazi Samer','Administraion','Senior',);
const employee2 = new Employee('1001','Lana Ali','Finance','Senior',);
const employee3 = new Employee('1002','Tamara Ayoub','Marketing','Senior',);
const employee4 = new Employee('1003','Safi Walid','Administraion','Mid-Senior',);
const employee5 = new Employee('1004','Omar Zaid','Development','Senior',);
const employee6 = new Employee('1005','Rana Saleh','Development','Junior',);
const employee7 = new Employee('1006','Hadi Ahmad','Finance','Mid-Senior',);






Employee.prototype.calcSalary = function (min, max) {
    this.level = ['Senior','Mid-Senior','Junior'];
if( this.level = 'Senior') {
    let x = Math.floor(Math.random() * (2000 - 1500) + 1500); 
    x = x - x *0.075;
    return x;
} else if ( this.level = 'Mid-Senior') {
    let x = Math.floor(Math.random() * (1500 - 1000) + 1000); 
    x = x - x *0.075;
    return x;
} else if (this.level = 'Junior') {
    let x = Math.floor(Math.random() * (1000 - 500) + 500);
    x = x - x *0.075;
    return x;
}
}





Employee.prototype.render = function() {
    document.write(`<p>Name of the employee: ${this.fullName} <br> The net salary:${this.calcSalary()}</p>`)
}

employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();








