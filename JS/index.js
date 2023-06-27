$(document).ready(function() {
    $("#hideBtn").click(function() {
        // $('#box p').hide('slow');
        $("#box p").hide(10000, function() {
            $(".box2").html("<h2>The text is hinded</h2>");
        });
    });

    $("#showBtn").click(function() {
        $("#box p").show("slow");
    });

    $("#toggleBtn").click(function() {
        $("#box p").toggle("slow");
    });
});