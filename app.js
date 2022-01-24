
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

console.log(employee1)
console.log(employee2)
console.log(employee3)
console.log(employee4)
console.log(employee5)
console.log(employee6)
console.log(employee7)








Employee.prototype.calcSalary = function (min, max) {
    let level = ['Senior','Mid-Senior','Junior'];
if( level = 'Senior') {
    let min = 1500;
    let max = 2000;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
} else if ( level = 'Mid-Senior') {
    let min = 1000;
    let max = 1500;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
} else if (level = 'Junior') {
    let min = 500;
    let max = 1000;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
} else {
    console.log('no')
}
}
console.log(employee1.calcSalary());
console.log(employee2.calcSalary());
console.log(employee3.calcSalary());
console.log(employee4.calcSalary());
console.log(employee5.calcSalary());
console.log(employee6.calcSalary());
console.log(employee7.calcSalary());







Employee.prototype.render = function() {
    document.write(`<p>${this.fullName} and ${this.salary}</p>`)
}

employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render();








