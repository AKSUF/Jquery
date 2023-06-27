$(document).ready(function() {
    $('#box').click(function() {
        alert("The div element was clicked");
    })
    $('h2').click(function() {
        alert("The h2 element was clicked");
    })
    $('p').click(function(event) {
        event.stopPropagation();
        alert("The p element was clicked");
    })
    $('button').click(function() {
        alert("The button element was clicked");
    })
});