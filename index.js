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
    let newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }




