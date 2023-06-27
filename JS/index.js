$(document).ready(function() {
    $('#emptybtn').click(function() {
        $('<h3>Append to:Yahoo Baba</h3>').appendTo('#box');

    });

    $('#removebtn').click(function() {
        $('<h3>Prepend to:Yahoo Baba</h3>').prependTo('#box');
    });

});