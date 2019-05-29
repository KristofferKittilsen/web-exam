function faqalert() {
    alert("No one reads this anyway!!");
}

function contactalert() {
    alert("Contact information: test@test.com " + "\n" + "Phonenumber: 28119823")
}

function inputPrompt() {
    document.getElementById("inputBox").style.display = "block";

}

function submitAnwser() {
    var x, text;
    x = document.getElementById("input").value;
    var info = document.createElement("P");
    x.innerText = input.vale;
    document.body.appendChild(info);
}

/*
function submitAnwser() {
    var x, text;
    x = document.getElementById("input").value;
    text = input.value;

    document.getElementById("demo").innerHTML = text;

    document.getElementById("inputBox").style.display = "none";

    var y, text2;
    y = document.getElementById("inputPage").value;
    text = inputPage.value;

    document.getElementById("demo2").innerHTML = text;

    document.getElementById("inputBox").style.display = "none";

} */
