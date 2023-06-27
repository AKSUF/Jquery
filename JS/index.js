$(document).ready(function() {
    $('#wrapallBtn').click(function() {
        var a = $('#box p').wrapAll('<div id="boxbg"> </div>');
        console.log(a);
    });

    $('#unwrapinnerBtn').click(function() {
        var b = $('#box h1').wrapInner('<div id="boxbg"> </div>');
        console.log(b);
    });
});