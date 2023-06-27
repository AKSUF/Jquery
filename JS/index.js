$(document).ready(function() {
    $('#slideupBtn').click(function() {
        $('#box').slideUp(1000, function() {
            $('#box2').html('<h1>box is fade in</h1>');
        });
    });

    $('#slidedownBtn').click(function() {
        $('#box').slideDown(1000, function() {
            $('#box2').html('<h1>box is fade out</h2>');
        });
    });
    $('#slidetoggleBtn').click(function() {
        $('#box').slideToggle(1000, function() {
            $('#box2').html('<h1>box is toggle</h1>');
        });
    });

});