function contactalert() {
    alert("Contact information: test@test.com " + "\n" + "Phonenumber: 28119823")
}

<<<<<<< HEAD
const landingdiv = document.getElementById("item1");
const newBtn = document.getElementById("newBtn");


function createDiv() {

    const title = document.getElementById("title").value;
    const text = document.getElementById("text").value;

=======
<<<<<<< HEAD

$(onPageLoad);

function onPageLoad() {
    $(".column").sortable({
        connectWith: ".column",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        start: function (event, ui) {
            ui.item.addClass('tilt');
        },
        stop: function (event, ui) {
            ui.item.removeClass('tilt');
        }
    });

    $(".portlet")
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all")
        .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

    $(".portlet-toggle").click(function () {
        var icon = $(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest(".portlet").find(".portlet-content").toggle();
    });
}


=======
>>>>>>> 86825b5bbc083f2b39c5e3203f142811d8734489
function inputPrompt() {
    document.getElementById("inputBox").style.display = "block";

}
<<<<<<< HEAD

=======
>>>>>>> 4761e2050808bd382c47dd8dc13d926752ed1148

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

<<<<<<< HEAD
=======
} */
>>>>>>> 86825b5bbc083f2b39c5e3203f142811d8734489
>>>>>>> 4761e2050808bd382c47dd8dc13d926752ed1148
