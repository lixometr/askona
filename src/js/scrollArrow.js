import throttle from "lodash.throttle"
let isAnimating = false
const check = () => {
    const scrollTop = $(window).scrollTop()

    if(isAnimating) return
    if (scrollTop >= 60) {
        $('.bottom-btn').addClass('top')
    } else {
        $('.bottom-btn').removeClass('top')

    }
}
check()
$('.bottom-btn').on('click', () => {
    if ($('.bottom-btn').hasClass('top')) {
        isAnimating = true
        $('html, body').animate({
            scrollTop: 0,
        }, 900, () => {
            isAnimating = false
            check()
        })
    } else {
        isAnimating = true
        const sTop = $('.s2').offset().top
        $('html, body').animate({
            scrollTop: sTop,
        }, 900, () => {
            isAnimating = false
            check()
        })
    }
})
$(window).on('scroll', throttle(check, 300))