function contactalert() {
    alert("Contact information: test@test.com " + "\n" + "Phonenumber: 123456789")
}
function memberalert() {
    alert("Under construction");
}

const landingdiv = document.getElementById("item1");
const toDoBtn = document.getElementById("toDoBtn");


function createDiv() {

    title = document.getElementById("title").value;
    text = document.getElementById("text").value;
    deadline = document.getElementById("deadline").value;


    var div = document.createElement("div");
    div.setAttribute("class", "kanbanPage");
    div.setAttribute("draggable", true);
    div.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain', null)");


    var h1 = document.createElement("h1");
    h1.innerText = title;

    var p = document.createElement("p");
    p.innerText = text;

    var x = document.createElement("Date");
    x.innerText = deadline;

    var br = document.createElement("p");
    br.innerText = "";
    var br2 = document.createElement("p");
    br.innerText = "";

    var greenBtn = document.createElement("button");
    greenBtn.setAttribute("class", "greenBtn")
    greenBtn.innerText = "Green";
    greenBtn.onclick = function () {
        div.style.backgroundColor = "green";
    }

    var redBtn = document.createElement("button");
    redBtn.setAttribute("class", "redBtn")
    redBtn.innerText = "Red";
    redBtn.onclick = function () {
        div.style.backgroundColor = "red";
    }

    var blueBtn = document.createElement("button");
    blueBtn.setAttribute("class", "blueBtn")
    blueBtn.innerText = "Blue";
    blueBtn.onclick = function () {
        div.style.backgroundColor = "blue";
    }

    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deleteBtn")
    deleteBtn.innerText = "Delete page";
    deleteBtn.onclick = function () {
        var r = confirm("You sure you want to delete this page?")
        if (r == true) {
            div.parentElement.removeChild(div);
        }
    }

    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "editBtn")
    editBtn.innerText = "Edit";
    editBtn.onclick = function () {
        editPopup.style.display = "block";
    }

    var editedTitle = document.getElementById("editTitleIn").value;
    editTitleBtn.onclick = function () {
        h1.innerText = editTitleIn.value;
    }

    var editedText = document.getElementById("editTextIn").value;
    editTextBtn.onclick = function () {
        p.innerText = editTextIn.value;
    }

    var editedDeadline = document.getElementById("editDeadlineIn").value;
    editDeadlineBtn.onclick = function () {
        x.innerText = editDeadlineIn.value;
    }

    var dropDown = document.createElement("div");
    dropDown.setAttribute("class", "dropDown");

    var dropBtn = document.createElement("button");
    dropBtn.setAttribute("class", "dropBtn");
    dropBtn.innerText = "Members";

    var dropDownContent = document.createElement("div");
    dropDownContent.setAttribute("class", "dropDownContent");

    var retreveTeam = localStorage.getItem("team");
    var team = JSON.parse(retreveTeam);

    var p1 = document.createElement("a");
    p1.innerText = team[0].name;
    p1.setAttribute("class", "p1");
    p1.onclick = function() {
        p1.style.backgroundColor = "#1B4353";
        p1.style.color = "white";
    }

    var p2 = document.createElement("a");
    p2.innerText = team[1].name
    p2.setAttribute("class", "p2");
    p2.onclick = function() {
        p2.style.backgroundColor = "#1B4353";
        p2.style.color = "white";
    }

    var p3 = document.createElement("a");
    p3.innerText = team[2].name;
    p3.setAttribute("class", "p3");
    p3.onclick = function() {
        p3.style.backgroundColor = "#1B4353";
        p3.style.color = "white";
    }

    var p5 = document.createElement("a");
    p5.innerText = team[4].name;
    p5.setAttribute("class", "p5");
    p5.onclick = function() {
        p5.style.backgroundColor = "#1B4353";
        p5.style.color = "white";
    }

    var p4 = document.createElement("a");
    p4.innerText = team[3].name;
    p4.setAttribute("class", "p4");
    p4.onclick = function() {
        p4.style.backgroundColor = "#1B4353";
        p4.style.color = "white";
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
    div.appendChild(editBtn);
    div.appendChild(dropDown);

    dropDown.appendChild(dropBtn);
    dropDown.appendChild(dropDownContent);

    dropDownContent.appendChild(p1);
    dropDownContent.appendChild(p2);
    dropDownContent.appendChild(p3);
    dropDownContent.appendChild(p4);
    dropDownContent.appendChild(p5);

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
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    popup.style.display = "block";
}

span.onclick = function () {
    popup.style.display = "none";
}

var colorPopup = document.getElementById("colorPopup");
var colorBtn = document.getElementById("newColorBtn");
var close = document.getElementsByClassName("colorClose")[0];

colorBtn.onclick = function () {
    colorPopup.style.display = "block";
}

close.onclick = function () {
    colorPopup.style.display = "none";
}

var editPopup = document.getElementById("editPopup");
var editBtn = document.getElementById("editBtn");
var editClose = document.getElementsByClassName("editClose")[0];

editClose.onclick = function () {
    editPopup.style.display = "none";
}

btnGreenC.onclick = function () {
    document.body.style.backgroundColor = "green";
}
btnRedC.onclick = function () {
    document.body.style.backgroundColor = "red";
}
btnBlackC.onclick = function () {
    document.body.style.backgroundColor = "black";
}
btnYellowC.onclick = function () {
    document.body.style.backgroundColor = "yellow";
}
btnPinkC.onclick = function () {
    document.body.style.backgroundColor = "pink";
}
btnBlueC.onclick = function () {
    document.body.style.backgroundColor = "blue";
}
btnResetC.onclick = function () {
    document.body.style.backgroundColor = "#173753";
}
btnPurpleC.onclick = function () {
    document.body.style.backgroundColor = "purple";
}

