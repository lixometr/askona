import throttle from "lodash.throttle"
const check = () => {
    const scrollTop = $(window).scrollTop()
    if (scrollTop >= 60) {
        $('.bottom-btn').addClass('top')
    } else {
        $('.bottom-btn').removeClass('top')

    }
}
check()
$('.bottom-btn').on('click', () => {
    if ($('.bottom-btn').hasClass('top')) {
        $('html, body').animate({
            scrollTop: 0,
        }, 900)
    } else {
        const sTop = $('.s2').offset().top
        $('html, body').animate({
            scrollTop: sTop,
        }, 900)
    }
})
$(window).on('scroll', throttle(check, 300))