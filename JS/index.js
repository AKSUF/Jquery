$(document).ready(function() {
    $('p').each(function(i) {
        $(this).on("click", { value: i + 1 }, function(event) {
            alert(event.data.value);
        })
    })
});