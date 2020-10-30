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
    switcherItems.removeClass('switcher__item_active')
    menuItems.removeClass('header__link_active')

    switcherItems.eq(0).addClass('switcher__item_active')
    menuItems.each(function (index) {
        const id = $(this).attr('href')
        const offset = $(this).attr('data-offset') || 0
        const sTop = $(id).offset().top
        const scrollTop = $(window).scrollTop()
        if (scrollTop >= sTop + parseInt(offset) - 10) {
            switcherItems.eq(index).addClass('switcher__item_active')
            menuItems.eq(index).addClass('header__link_active')
        } else {

        }

    })
}

$(window).on('scroll', throttle(check, 300))