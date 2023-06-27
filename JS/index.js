$(document).ready(function() {
    // $('p').first().css('background', 'gold');
    // $('p').last().css('background', 'gold');
    // $('p').filter('.test').css('background', 'gold');
    // $('p').not('.test').css('background', 'gold');
    $('p').slice(1, 3).css('background', 'gold');
});