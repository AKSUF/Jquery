$(document).ready(function() {
    $('#hasclassBtn').click(function() {
        const b = $('#box').hasClass('box');
        console.log(b);
        if (b == true) {
            $('.topic').html("<h1>how is going your day</h1>")
        } else {
            $('.topic').html("<h1>so sorry, no box class found</h1>")
        }
    });
});