function validate(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;


var url = "/login/signin/"+encodeURIComponent(email) + "/" + encodeURIComponent(password);

        window.location.href = url;

}



