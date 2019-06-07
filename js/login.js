
function myFunction() {
    var user = [
        { username: "test", password: "123" },
        { username: "test2", password: "password123" },
        { username: "test3", password: "ilikejs" },
    ]

    var userIdInput = document.getElementById("username").value;
    var userPwInput = document.getElementById("password").value;

    for (i = 0; i < user.length; i++) {
        if (userIdInput == user[i].username && userPwInput == user[i].password) {
            document.getElementById("Ok").innerHTML = "Click here to continue";
        }
    }

}
