//duck typing
function printStudentNames(studentGroup) {
    if (studentGroup.nameList && Array.isArray(studentGroup.nameList)) {
        console.log("Student names:");
        studentGroup.nameList.forEach((name, index) => {
            console.log(`${index + 1}: ${name}`);
        });
    } else {
        console.log("This name does not have a CSE student name list.");
    }
}
const classCse = {
    nameList: ["Danish", "Babu", "Charlie"],
    facultyAdvisor: "Mr. Rajarajan"
};
const classEce = {
    teamMembers: ["Diana", "Elampirai", "Franklin"],
    facultyAdvisor: "Mr. Ganesh"
};
printStudentNames(classCse); 
printStudentNames(classEce); 




 
//list in number
let number: number[] = [21,41,65,98,63];
let firstNumber = number[0];
number.push(6); 
console.log(number);
number.splice(2,1);
console.log(number);
let listLength = number.length;
console.log(listLength); 

//list in string
let role: string[] = ["Trainee","Developer","Tester"];
let index = role.indexOf("Tester");
console.log(index); 
role.forEach(roles => {
    console.log(roles);
});
