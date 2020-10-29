const throttle = require("lodash.throttle")
const menuItems = $('.header__link')
const switcherItems = $('.switcher__item')
switcherItems.on('click', function () {
    const idx = $(this).index()
    const activeItem = menuItems.eq(idx)
    const activeSection = activeItem.attr('href')
    const top = $(activeSection).offset().top
    let offset = activeItem.attr('data-offset') || 0

    $('html, body').animate({
        scrollTop: top + parseInt(offset)
    }, 300)
})
const check = () => {
    menuItems.each(function (index) {
        const id = $(this).attr('href')
        const sTop = $(id).offset().top
        const scrollTop = $(window).scrollTop()
        if (scrollTop >= sTop - 10) {
            switcherItems.eq(index).addClass('switcher__item_active')
        } else {
            switcherItems.eq(index).removeClass('switcher__item_active')

        }

    })
}

$(window).on('scroll', throttle(check, 300))