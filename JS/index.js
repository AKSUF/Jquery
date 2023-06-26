$(document).ready(function() {
    $('#box').click(function() {
        $('#box').css('background-color', 'green');
    });
});
$(document).ready(function() {
    $('#box').dblclick(function() {
        $('#box').css('background-color', 'orange');
    });
});
$(document).ready(function() {
    $('#box').contextmenu(function() {
        $('#box').css('background-color', 'blue');
    });
});
$(document).ready(function() {
    $('#box').mouseenter(function() {
        $('#box').css('background-color', '#646A3E');
    });
});
$(document).ready(function() {
    $('#box').mouseleave(function() {
        $('#box').css('background-color', '#691677');
    });
});