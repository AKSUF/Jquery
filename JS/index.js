$(document).ready(function() {
    $('#positionBtn').click(function() {
        const a = $('#box p').position();
        console.clear();
        console.log(a);
        console.log("Top" + a.top);
        console.log("Left" + a.left);
    })

    $('#offsetBtn').click(function() {
        $("#box").offset({ top: 100, left: 100 });
        const b = $('#box p').offset();

        console.clear();
        console.log(b);
    })
});