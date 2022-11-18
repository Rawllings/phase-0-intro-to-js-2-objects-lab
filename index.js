// Write your solution in this file!
const employee ={
    name:"rawllings",streetAdress:"30100 nakuru"
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return{...employee, ...{[key]:value} };
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}


function  deleteFromEmployeeByKey(employee, key) {
    let employee1 = Object.assign({}, employee);
    delete employee1[key];
    return employee1;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }




