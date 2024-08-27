function validateform() {

    const rollno = document.getElementById("rollno").value;
  
    const rollnoError = document.getElementById("rollno-error");
   
    rollnoError.textContent = "";
   

    let isValid = true;

    
    if (rollno === "" || /[^a-zA-Z0-9]/.test(rollno)) {
        rollnoError.textContent = "Please enter your roll number properly.";
        isValid = false;
    }
    return isValid;
}


