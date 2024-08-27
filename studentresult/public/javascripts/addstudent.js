
function validateform() {
    const first = document.getElementById("first").value;
    const fname = document.getElementById("fname").value;
    const rollno = document.getElementById("rollno").value;
    const dept = document.getElementById("dept").value;
    const year = document.getElementById("year").value;
    const semester = document.getElementById("semester").value;
    const gender = document.getElementById("gender").value;
    const dateofBirth = document.getElementById("dateofBirth").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value;

    const firstError = document.getElementById("first-error");
    const fnameError = document.getElementById("fname-error");
    const rollnoError = document.getElementById("rollno-error");
    const deptError = document.getElementById("dept-error");
    const yearError = document.getElementById("year-error");
    const semesterError = document.getElementById("semester-error");
    const genderError = document.getElementById("gender-error");
    const dateofBirthError = document.getElementById("dateofBirth-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const mobileError = document.getElementById("mobile-error");

    firstError.textContent = "";
    fnameError.textContent = "";
    rollnoError.textContent = "";
    deptError.textContent = "";
    yearError.textContent = "";
    semesterError.textContent = "";
    genderError.textContent = "";
    dateofBirthError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    mobileError.textContent = "";

    let isValid = true;

    if (first === "" || /\d/.test(first)) {
        firstError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (fname === ""|| /\d/.test(fname)) {
        fnameError.textContent = "Please enter your father's name.";
        isValid = false;
    }
    if (rollno === "" || /[^a-zA-Z0-9]/.test(rollno)) {
        rollnoError.textContent = "Please enter your roll number properly.";
        isValid = false;
    }
    if (dept === "None") {
        deptError.textContent = "Please choose your department properly.";
        isValid = false;
    }
    if (year === "None") {
        yearError.textContent = "Please choose your year properly.";
        isValid = false;
    }
    if (semester === "None") {
        semesterError.textContent = "Please choose your semester properly.";
        isValid = false;
    }
    if ( gender === "None") {
        genderError.textContent = "Please choose your  gender properly.";
        isValid = false;
    }
    if (dateofBirth === "") {
        dateofBirthError.textContent = "Please enter your date of birth properly.";
        isValid = false;
    }
    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (password === "" || password.length < 8 || !/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])/.test(password)) {
        passwordError.textContent = "Please enter a valid password with at least 8 characters, including a number, a letter, and a special character.";
        isValid = false;
    }
    if (mobile === "" || !/^\d{10}$/.test(mobile)) {
        mobileError.textContent = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }

    if (isValid) {
       
            alert("Add Student Details successfully");
            window.location = "student.ejs"; 
    }

    return isValid;
}


