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
        }, 300)
    }
})
$(window).on('scroll', throttle(check, 300))