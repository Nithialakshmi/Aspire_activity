var attempt = 3; 
function validate(){
var newpassword = document.getElementById("newpassword").value;
var confirmpassword = document.getElementById("confirmpassword").value;
if ( confirmpassword == newpassword ){
window.location = "home1.html"; 
return false;
}
 }