$(document).ready(function() {
    // $("#box").on("click", function() {
    //     $(this).css("background", "orange");
    // })

    //secondart
    // $("#box").on("mouseover mouseout", function() {
    //     $(this).toggleClass("boxbg");
    // })

    $("#box").on({
        "click": function() {
            $(this).css("background", "orange");
        },
        "mouseover": function() {
            $(this).css("background", "pink");
        },
        "mouseout": function() {
            $(this).css("background", "#776B2D")
        }

    });
    $("#button").click(function() {
        $("#box").off("mouseover mouseout")
    });
});