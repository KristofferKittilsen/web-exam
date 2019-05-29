function faqalert() {
    alert("No one reads this anyway!!");
}

function contactalert() {
    alert("Contact information: test@test.com " + "\n" + "Phonenumber: 28119823")
}

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
>>>>>>> 86825b5bbc083f2b39c5e3203f142811d8734489
