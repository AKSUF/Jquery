$(document).ready(function() {
    $(window).scroll(function() {
        $('#box2').html("");
        $('#box2').append("Top:" + $(window).scrollTop());
        $('#box2').append("<br>Left" + $(window).scrollLeft());
        const a = ($(window).scrollTop());
        const b = ($(window).scrollLeft());
        console.log(a);
        console.log(b);
    })


});