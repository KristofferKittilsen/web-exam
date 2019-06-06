//"database"
    function myFunction(){
    var id1 = "test";
    var password = "test";
    var Good = "Login Successful";
      var Bad = "Login Unsuccessful";

var userIdInput = document.getElementById("username").value;
var userPwInput = document.getElementById("password").value;

if (userIdInput == id1 && userPwInput == password)
{
    document.getElementById("Ok").innerHTML = Good;
} else {
    document.getElementById("notOk").innerHTML = Bad;
};
};