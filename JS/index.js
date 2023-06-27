$(document).ready(function() {
    $('#box').on("click dblclick mouseover mouseout", function(event) {
        $('#result h1').html("Event: " + event.type);
    });
});