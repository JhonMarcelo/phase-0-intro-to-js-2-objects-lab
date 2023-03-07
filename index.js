// Write your solution in this file!
const employee = {};
employee.name;
employee.streetAddress;

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updateEmployee = {...employee};
updateEmployee[key] = value;
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}



function deleteFromEmployeeByKey(employee ,key){
    const tempEmployee = {...employee};
    delete tempEmployee[key];
    return tempEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}

