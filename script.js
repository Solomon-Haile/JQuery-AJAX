// jquery application

$(document).ready(function() {
    // Your jQuery code here
    $('#close').click(() => {
        alert('Do you want to close the app ?')
    })

    $('#fadeout').click(() => {
        $('#fade-text').fadeOut(1500);
    });

    $('#append').click(() => {
        $('#append-text').append(' You Append Me');
    })

    $('#rgt-arrow').click(() => {
        $('.hidden').addClass('rgt-arrow').append(document.createTextNode('Website is under construction !'))
    })

    $('#lft-arrow').click(() => {
        $('#append-text').toggle();
    })

    $('#btn-color').click(() => {
        $('#red-text').css('color', 'red');
    })

    $('#not-working').click(() => {
        $('#d-none').slideDown('slow')
    })

    $('#home').click(() => {
        $('#home-input').val('This is a beautiful home')
    })

    $('#home-input').click(() => {
        $('#home-input').val('This is your search field')
    })
});
  
