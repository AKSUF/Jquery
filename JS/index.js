$(document).ready(function() {
    $('#appendbtn').click(function() {
        $('#box').after('<h3>After the box</h3>');
    });
    $('#prependbtn').click(function() {
        $('#box').before('<h3>Before the box</h3>');
    })

});