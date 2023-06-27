$(document).ready(function() {
    $('#animatedBtn').click(function() {
        // $('#box').animate({
        //     left: '150px',
        //     width: 'toggle',
        //     fontSize: '25px',
        //     borderWidth: '5px',
        // });

        $('#box').animate({
            left: '150px',
            fontSize: '30px',
        }, 3000);
        $('#box').animate({
            top: '150px',
        });
        $('#box').animate({
            width: '250px',
        });

    })

});