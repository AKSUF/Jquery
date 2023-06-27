$(document).ready(function() {
    $('#box').on("mouseover mouseout mousedown", function(event) {
        $('h2').html(event.type + ":" + event.which);
    });
    $('#inputbox').on("keydown", function() {
        $('h2').html(event.type + ":" + event.which);
    })
});