$(document).ready(function() {
    $('li').each(function() {
        $('#demo').html($(this).text());
        console.log($(this).text());
    });
});