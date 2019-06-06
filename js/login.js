
function myFunction() {
    var user = [
        { username: "testPerson", password: "123" },
        { username: "testPerson2", password: "password123" },
        { username: "testPerson3", password: "ilikeprog" },
    ]

    var userIdInput = document.getElementById("username").value;
    var userPwInput = document.getElementById("password").value;

    for (i = 0; i < user.length; i++) {
        if (userIdInput == user[i].username && userPwInput == user[i].password) {
            document.getElementById("Ok").innerHTML = "Click here to continue";
        }
    }

}
