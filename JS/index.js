$(document).ready(function() {
    $('#emptybtn').click(function() {
        $('#box h2').empty();
    });

    $('#removebtn').click(function() {
        $('#box h2').remove('');
    });

});