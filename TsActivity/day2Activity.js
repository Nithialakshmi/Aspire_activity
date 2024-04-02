//duck typing
function printStudentNames(studentGroup) {
    if (studentGroup.nameList && Array.isArray(studentGroup.nameList)) {
        console.log("Student names:");
        studentGroup.nameList.forEach(function (name, index) {
            console.log("".concat(index + 1, ": ").concat(name));
        });
    }
    else {
        console.log("This name does not have a CSE student name list.");
    }
}
var classCse = {
    nameList: ["Danish", "Babu", "Charlie"],
    facultyAdvisor: "Mr. Rajarajan"
};
var classEce = {
    teamMembers: ["Diana", "Elampirai", "Franklin"],
    facultyAdvisor: "Mr. Ganesh"
};
printStudentNames(classCse);
printStudentNames(classEce);
//list in number
var number = [21, 41, 65, 98, 63];
var firstNumber = number[0];
number.push(6);
console.log(number);
number.splice(2, 1);
console.log(number);
var listLength = number.length;
console.log(listLength);
//list in string
var role = ["Trainee", "Developer", "Tester"];
var index = role.indexOf("Tester");
console.log(index);
role.forEach(function (roles) {
    console.log(roles);
});
