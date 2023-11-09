// change image from one to other while clicking

$(document).ready(function() {

    $('img').click(function() {
        const alt = $(this).attr('alt-pic')
        $(this).attr('src', alt)
    })
})