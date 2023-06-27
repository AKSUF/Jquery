$(document).ready(function() {
    $('#result').on("click", function(event) {
        event.preventDefault();
        var a = event.isDefaultPrevented();
        $('h2').html(a);
    })
});