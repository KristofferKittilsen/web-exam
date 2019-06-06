
function myFunction() {
    var user = [
        { username: "test", password: "test" },
        { username: "test2", password: "test2" },
        { username: "test3", password: "test3" },
    ]

    var userIdInput = document.getElementById("username").value;
    var userPwInput = document.getElementById("password").value;

    for (i = 0; i < user.length; i++) {
        if (userIdInput == user[i].username && userPwInput == user[i].password) {
            document.getElementById("Ok").innerHTML = "Click here to continue";
        }
    }

}
