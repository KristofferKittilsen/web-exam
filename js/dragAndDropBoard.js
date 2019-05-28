$('#item1, #item2').bind('dragstart', function(event) {
    event.originalEevent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
});

$('#todo, #inprogress, #done').bind('dragover', function(event){
    event.preventDefault();
});