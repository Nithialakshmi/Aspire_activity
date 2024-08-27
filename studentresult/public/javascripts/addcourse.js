function validationform() {
    const courseid = document.getElementById("courseid").value;
    const coursename = document.getElementById("coursename").value;
    const dept = document.getElementById("dept").value;
    const year = document.getElementById("year").value;
    const semester = document.getElementById("semester").value;

    const courseidError = document.getElementById("courseid-error");
    const coursenameError = document.getElementById("coursename-error");
    const deptError = document.getElementById("dept-error");
    const yearError = document.getElementById("year-error");
    const semesterError = document.getElementById("semester-error");

    courseidError.textContent = "";
    coursenameError.textContent = "";
    deptError.textContent = "";
    yearError.textContent = "";
    semesterError.textContent = "";

    let isValid = true;

    if (courseid === "" || /[^a-zA-Z0-9]/.test(courseid)) {
        courseidError.textContent = "Please enter a valid Course ID. Only alphanumeric characters and Numbers are allowed.";
        isValid = false;
    }

    if (coursename === "" || /[^a-zA-Z\s]/.test(coursename)) {
        coursenameError.textContent = "Please enter a valid Course Name. Only alphabetic characters are allowed.";
        isValid = false;
    }

    
    if (dept === "None") {
        deptError.textContent = "Please choose your department.";
        isValid = false;
    }

    
    if (year === "None") {
        yearError.textContent = "Please choose your year.";
        isValid = false;
    }

   
    if (semester === "None") {
        semesterError.textContent = "Please choose your semester.";
        isValid = false;
    }
    if (isValid) {
       
        alert("Add Course Details successfully");
        window.location = "course.ejs"; 
}

return isValid;

   
}