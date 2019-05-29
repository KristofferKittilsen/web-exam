function faqalert() {
    alert("No one reads this anyway!!");
}

function contactalert() {
    alert("Contact information: test@test.com " + "\n" + "Phonenumber: 28119823")
}

function inputPrompt() {
    document.getElementById("inputBox").style.display = "block";

}

const landingdiv = document.getElementById("item1");
const newBtn = document.getElementById("newBtn");


function createDiv() {

    const title = document.getElementById("title").value;
    const text = document.getElementById("text").value;


    var div = document.createElement("div");

    var h1 = document.createElement("h1");
    h1.innerText = title;
    var p = document.createElement("p");
    p.innerText = text;

    div.appendChild(h1);
    div.appendChild(p);
    landingdiv.appendChild(div);

}


newBtn.addEventListener("click", function () {
    createDiv();
})


var item1 = document.querySelector("item1");

function dragginStarts(e) {
    item1 = e.target;
    item1 = style.opacity = "0.2";
}

item1.addEventListener("dragstart", draggingStarts, false);






