$(document).ready(function() {
    $('#box').on("click", function() {
        $('h3').html("Target Element" + event.target);
        $('h3').html("Target Element" + event.target.innerHTML);
    })
});