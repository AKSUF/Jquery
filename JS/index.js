$(document).ready(function() {
    $('#width').click(function() {
        const a = $('#box').width();
        const b = $('#box').innerWidth();
        const c = $('#box').outerWidth();
        const d = $('#box').outerWidth(true);
        console.clear();
        console.log("width of box" + "" + a);
        console.log("innerwidth of box" + "" + b);
        console.log("outerwidth of box" + "" + c);
        console.log("outerwidth(true) of box" + "" + d);
    });
    $('#height').click(function() {
        const a = $('#box').height();
        const b = $('#box').innerHeight();
        const c = $('#box').outerHeight();
        const d = $('#box').outerHeight(true);
        console.clear();
        console.log("height of box" + "" + a);
        console.log("innerheight of box" + "" + b);
        console.log("outerheight of box" + "" + c);
        console.log("outerheight(true) of box" + "" + d);
    })
});