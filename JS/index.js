$(document).ready(function() {
    $("#append").click(function() {
        $("#box").append("<h2>Yahoo Baba<h2>")
    })
    $("#prepend").click(function() {
        $("#box").prepend("<h2>This is only a title<h2>")
    })

    $("#appendbtn").click(function() {
        $("#ul").append("<li>New row</li>")
    })
    $("#prependbtn").click(function() {
        $("#ul").prepend("<li>The heading</li>")
    });
});