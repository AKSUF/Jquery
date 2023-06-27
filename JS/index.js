$(document).ready(function() {
    $('#fadeoutBtn').click(function() {
        $('#box').fadeOut(1000, function() {
            $('#box2').html('<h1>box is fade in</h1>');
        });
    });

    $('#fadeinBtn').click(function() {
        $('#box').fadeIn(1000, function() {
            $('#box2').html('<h1>box is fade out</h2>');
        });
    });
    $('#fadetoggleBtn').click(function() {
        $('#box').fadeToggle(1000, function() {
            $('#box2').html('<h1>box is toggle</h1>');
        });
    });
    $('#fadetoBtn').click(function() {
        $('#box').fadeTo(1000, 0.5, function() {
            $('#box2').html('<h1>boxis fade to</h1>');
        });
    });
});