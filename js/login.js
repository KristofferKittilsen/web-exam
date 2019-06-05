function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function check(form) {
    if (form.userid.value == "test" && form.pswrd.value == "test") {
        window.open(href = 'index.html')
    } else {
        alert("the username and password you entered is wrong")
    }
}
