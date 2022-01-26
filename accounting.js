'use strict';

function Employee(employeeID,fullName,department,level,imageUrl){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level= level;
    this.imageUrl = imageUrl;
    this.salary = this.calcSalary();
    Employee.allEmployees.push(this);

}

Employee.allEmployees = [];



Employee.prototype.calcSalary = function () {
    this.level = ['Senior','Mid-Senior','Junior'];
if( this.level = 'Senior') {
    let x = Math.floor(Math.random() * (2000 - 1500) + 1500); 
    x = x - x *0.075;
    x = x.toFixed(0);
    return x;
} else if ( this.level = 'Mid-Senior') {
    let x = Math.floor(Math.random() * (1500 - 1000) + 1000); 
    x = x - x *0.075;
    x = x.toFixed(0);
    return x;
} else if (this.level = 'Junior') {
    let x = Math.floor(Math.random() * (1000 - 500) + 500);
    x = x - x *0.075;
    x = x.toFixed(0);
    return x;
}
}

// var sum = 0;
// for (var i = 0; i < array.length; i++) {
//     sum = sum + array[i];
// }
// return sum;



render();


function render(){
 
    let mySection = document.getElementById('account');
   
  
    let tableEL = document.createElement('table');
    mySection.appendChild(tableEL);
  
    let trEl = document.createElement('tr');
    tableEL.appendChild(trEl);
  
    let th1EL = document.createElement('th');
    trEl.appendChild(th1EL);
    th1EL.textContent= "Department Name"
  
    let th2EL = document.createElement('th');
    trEl.appendChild(th2EL);
    th2EL.textContent= "Number of employees in each department"
  

    let th3EL = document.createElement('th');
    trEl.appendChild(th3EL);
    th3EL.textContent= "Average salary of the department"


    let th4EL = document.createElement('th');
    trEl.appendChild(th4EL);
    th4EL.textContent= "Total salary"


    for(let i=0; i<Employee.allEmployees.length;i++){
      let acc = Employee.allEmployees[i];

      let trEl = document.createElement('tr');
      tableEL.appendChild(trEl);
  
      let td1El = document.createElement('td');
      trEl.appendChild(td1El);
      td1El.textContent = `${acc.department}`
  
    
    }}
       


const employee1 = new Employee('1000','Ghazi Samer','Administraion','Senior','images/Ghazi.jpg');
const employee2 = new Employee('1001','Lana Ali','Finance','Senior','images/Lana.jpg');
const employee3 = new Employee('1002','Tamara Ayoub','Marketing','Senior','images/Tamara.jpg');
const employee4 = new Employee('1003','Safi Walid','Administraion','Mid-Senior','images/Safi.jpg');
const employee5 = new Employee('1004','Omar Zaid','Development','Senior','images/Omar.jpg');
const employee6 = new Employee('1005','Rana Saleh','Development','Junior','images/Rana.jpg');
const employee7 = new Employee('1006','Hadi Ahmad','Finance','Mid-Senior','images/Hadi.jpg');



