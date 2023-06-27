$(document).ready(function() {
    $('p').has('.test').css('background', 'gold');

    if ($('p').parent().is('div')) {
        console.log($('p').parent().is('div'));
    }

    $('p').click(function() {
        if ($(this).parent().is('div')) {
            $(this).css('background', 'gold');
        }
    })

});