// $(document).ready(function() {
//     var a = $('#box').html();
//     console.log(a);
// });
$(document).ready(function() {
    $('#sform').submit(function() {
        var name = $('sname').val();
        var classname = $('sclass').val();
        var country = $('scountry').val();
        alert("Hello" + "name" + name + "......" + classname + country);
    })
});