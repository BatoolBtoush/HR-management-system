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

Employee.allEmployees =[];



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

function render (){
    let mySection = document.getElementById('info');


    for(let i =0; i<Employee.allEmployees.length;i++){
        let bat = Employee.allEmployees[i];
    let divEl = document.createElement('div');
    mySection.appendChild(divEl);

    let imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src', bat.imageUrl)
    imgEl.setAttribute('alt',bat.fullName);

    let detailsEl = document.createElement('p');
    divEl.appendChild(detailsEl);
    detailsEl.textContent = `Name: ${bat.fullName} - ID: ${bat.employeeID}`;

    let details2El = document.createElement('p');
    divEl.appendChild(details2El);
    details2El.textContent = `Department: ${bat.department} - Level: ${bat.level}`

    let salaryEl = document.createElement('p');
    divEl.appendChild(salaryEl);
    salaryEl.textContent = `${bat.salary}`

    
    // let mySection2 = document.getElementById('task7')
    // let task7El = document.createElement('p');
    // mySection2.appendChild(task7El);
    // task7El.textContent = `Name of the employee: ${bat.fullName} - The net salary:${bat.salary}`
}}








const employee1 = new Employee('1000','Ghazi Samer','Administraion','Senior','images/Ghazi.jpg');
const employee2 = new Employee('1001','Lana Ali','Finance','Senior','images/Lana.jpg');
const employee3 = new Employee('1002','Tamara Ayoub','Marketing','Senior','images/Tamara.jpg');
const employee4 = new Employee('1003','Safi Walid','Administraion','Mid-Senior','images/Safi.jpg');
const employee5 = new Employee('1004','Omar Zaid','Development','Senior','images/Omar.jpg');
const employee6 = new Employee('1005','Rana Saleh','Development','Junior','images/Rana.jpg');
const employee7 = new Employee('1006','Hadi Ahmad','Finance','Mid-Senior','images/Hadi.jpg');



render();


// employee1.render();
// employee2.render();
// employee3.render();
// employee4.render();
// employee5.render();
// employee6.render();



 let moreInfo = document.getElementById('moreInfo');
  moreInfo.addEventListener('submit', addNewEmployeeInfo);

  function randomIdNumbers(){ 
    let b = Math.floor(1000 + Math.random() * 1006);
    } 
    randomIdNumbers();
  
function addNewEmployeeInfo(event){
    event.preventDefault();
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imageUrl = event.target.imgurl.value;
    
    
    let addNewEmployeeInfo = new Employee(randomIdNumbers(),fullName,department,level,imageUrl);
    render();
    settingItem()
  }






function settingItem(){
    let data = JSON.stringify(Employee.allEmployees);
    localStorage.setItem('employeesinfo',data)
  }
 
  
  function gettingItem(){
    let stringObj = localStorage.getItem('employeesinfo');
    // console.log(stringObj);
    let parsObj = JSON.parse(stringObj);
    // console.log(parsObj);
    if (parsObj !== null){
        Employee.allEmployees = parsObj
    }
  
    render();
  
  }
  gettingItem()