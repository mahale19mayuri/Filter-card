let selectedValue = document.getElementById("list").value;
function getSelectedValue() {
  selectedValue = document.getElementById("list").value;
}

const employeeArr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

filterEmployee = () => {
  var filteredArray = employeeArr.filter(filteredEmployee);
  var text = "";
  filteredArray.forEach(myFun);

  function myFun(user) {
    text +=
       user.id +
      "." + " "+
      "name"+":"+user.name +
       "  "+ 
     "profession"+":"+user.profession +" "+
      "age"+":"+user.age +
      "<br>";
  }
  document.getElementById("item").innerHTML = text;
  };

filteredEmployee = (employee) => {
  employee.age = Number(employee.age);
  if (employee.name == "john") {
    employee.age = 19;
  }
  console.log(typeof employee.age);

  if (selectedValue == "profession") {
    return true;
  }
  return employee.profession == selectedValue;
};
filterEmployee();