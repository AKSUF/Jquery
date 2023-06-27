$(document).ready(function() {
    $('#replaceBtn').click(function() {
        var a = $('#box p:nth-child(2)').replaceWith("Yahoo baba");
        console.log(a);
    });
});