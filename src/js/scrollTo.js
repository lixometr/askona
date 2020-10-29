
$(document).on('click', '.scroll-link', function (e) {
    e.preventDefault()
    const id = $(this).attr('href')
    const top = $(id).offset().top
    let offset = $(this).attr('data-offset') || 0

    $('html, body').animate({
        scrollTop: top + parseInt(offset)
    }, 400)
})  