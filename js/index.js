function contactalert() {
    alert("Contact information: test@test.com " + "\n" + "Phonenumber: 28119823")
}

const landingdiv = document.getElementById("item1");
const toDoBtn = document.getElementById("toDoBtn");


function createDiv() {

    const title = document.getElementById("title").value;
    const text = document.getElementById("text").value;
    const deadline = document.getElementById("deadline").value;

   


    var div = document.createElement("div");
    div.setAttribute("class", "kanbanPage");
    div.setAttribute("draggable", true);
    div.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain', null)");


    var h1 = document.createElement("h1");
    h1.innerText = title;
    
    var p = document.createElement("p");
    p.innerText = text;
    
    var x = document.createElement ("Date");   
    x.innerText = deadline; 

    var br = document.createElement("p");
    br.innerText = "";
    var br2 = document.createElement("p");
    br.innerText = "";


    var greenBtn = document.createElement("button");
    greenBtn.innerText = "Green";
    greenBtn.onclick = function() {
        div.style.backgroundColor = "green";
    }

    var redBtn = document.createElement("button");
    redBtn.innerText = "Red";
    redBtn.onclick = function() {
        div.style.backgroundColor = "red";
    }

    var blueBtn = document.createElement("button");
    blueBtn.innerText = "Blue";
    blueBtn.onclick = function() {
        div.style.backgroundColor = "blue";
    }

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete page";
    deleteBtn.onclick = function() {
        var r = confirm("You sure you want to delete this page?")
        if (r == true) {
            div.parentElement.removeChild(div);
        } else {
            alert("You did not delete page");
        }
        

        
    }
    
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(x);
    div.appendChild(br);
    div.appendChild(greenBtn);
    div.appendChild(redBtn);
    div.appendChild(blueBtn);
    div.appendChild(br2);
    div.appendChild(deleteBtn);
    
    landingdiv.appendChild(div);

}


toDoBtn.addEventListener("click", function () {
    createDiv();
    popup.style.display = "none";
    
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


var popup = document.getElementById("myPopup");
var btn = document.getElementById("newPageBtn");
var span = document.getElementsByClassName("close") [0];

btn.onclick = function() {
    popup.style.display = "block";
}

span.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}


