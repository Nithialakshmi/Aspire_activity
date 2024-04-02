//named function 
function calculateGrade(marks) {
   
    if (marks >= 60) {
     return "Pass"
    } else if (marks < 60) {
        return "Fail"
    }
}
    function displayResult(studentName, marks) {
        const score = calculateGrade(marks);
        console.log(`${studentName} is  ${score}`);
    }
    displayResult("John", 85);
    displayResult("Alice", 55);
    displayResult("Bob", 62);


// Anonymous function

let studentGrade = function(marks)
{
    if(marks>=60)
    {
        return "Pass";
    }
    else{
        return "fail";
    }
  
};
console.log(studentGrade(70));



//immediately invoked function expression
let message = (function(){
    let empname = "nithia";
    console.log(empname);
})();

//call back functions 


function greetEmployee(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('Welcome to Aspire System');
}
greetEmployee('Jessica', callMe);



