$(document).ready(function() {
    $('#sname,#sclass,#scountry').focus(function() {
        $(this).css('background-color', 'lime');
    });

    $('#sname,#sclass,#scountry').blur(function() {
        $(this).css('background-color', '');
    });

    $('#sname,#sclass,#scountry').change(function() {
        $(this).css('background-color', '');
    });

    $('#scountry').change(function() {
        $(this).css('background-color', 'pink');
    });

    $('#scountry').change(function() {
        var a = $(this).val();
        $('#result').html(a);
    });

    $('#sname,#sclass').change(function() {
        $(this).css('background-color', '');
    });

    $('#sform').submit(function() {
        console.log("Form subiiteed suuccessfully");
    });


});