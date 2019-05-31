function contactalert() {
    alert("Contact information: test@test.com " + "\n" + "Phonenumber: 28119823")
}

const landingdiv = document.getElementById("item1");
const newBtn = document.getElementById("newBtn");


function createDiv() {

    const title = document.getElementById("title").value;
    const text = document.getElementById("text").value;


    var div = document.createElement("div");
    div.setAttribute("class", "kanbanPage");
    div.setAttribute("draggable", true);
    div.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain', null)");


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

var dragged;

document.addEventListener("drag", function (event) {

}, false);

document.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function (event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    if (event.target.classname == "column") {
        event.target.style.background = "purple";
    }
}, false);

document.addEventListener("dragleave", function (event) {
    if (event.target.className == "column") {
        event.target.style.background = "";
    }
}, false);

document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (event.target.className == "column") {
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);



function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

