$(document).ready(function() {
    $('#clickbutton').click(function() {
        $('#box h1').text("Hello Yahoo baba");
        $('#box').append('<p>This is new text</p>');
        $('#box h1').attr('class', 'red');
    });
});