$(document).ready(function() {
    $('#animatedBtn').click(function() {

        $('#box').animate({
            left: '300px',
            fontSize: '20px',
        }, 3000, function() {
            $('#box2').html("This is anamatd");
        });
        $('#box').animate({
            width: '150px',
        });
    })
    $('#stopBtn').click(function() {
        $('#box').stop(true);
    })



});