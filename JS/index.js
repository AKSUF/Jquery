$(document).ready(function() {
    alert(1);
});

$(document).ready(function() {
    // $('#list li').css("border", "2px solid red");
    // $('li:last-child').css("border", "2px solid red");
    // $('ul li:eq(2)').css("border", "2px solid red");
    $('ul li:gt(1)').css("border", "2px solid red");
})