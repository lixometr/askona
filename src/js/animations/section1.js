const throttle = require("lodash.throttle")

/**
 * autoAlfa: 0
 * visibilit: hidden;
 */
gsap.to('.galaxy', {
    scrollTrigger: {
        trigger: ".s1",
        pin: false,
        start: "top top",
        end: "+=400",
        scrub: true, // fix can be in seconds (smooth delay)
        // once: true

    },
    y: -300
})
gsap.to('.s1__box', {
    scrollTrigger: {
        trigger: ".s1",
        pin: false,
        start: "top top",
        end: "+=400",
        scrub: true, // fix can be in seconds (smooth delay)
        // once: true

    },
    y: -100
})
gsap.to('.s1__image', {
    scrollTrigger: {
        trigger: ".s1",
        pin: false,
        start: "top top",
        end: "+=200",
        scrub: true, // fix can be in seconds (smooth delay)
        // once: true

    },
    y: 40
})


gsap.fromTo('.header__box, .s1__box', {
    opacity: 0,
    y: -100
}, {
    y: 0,
    opacity: 1,
    autoAlpha: 1,
    duration: .9
})
gsap.fromTo('.galaxy', {
    opacity: 0,
    y: 100
}, {
    y: 0,
    opacity: 1,
    autoAlpha: 1,
    duration: .9
})
gsap.fromTo('.s1__image', {
    opacity: 0,
    x: 100
}, {
    x: 0,
    opacity: 1,
    autoAlpha: 1,
    duration: .9
})
gsap.fromTo('#stars', {
    scale: 1.4,
    opacity: 0,
}, {
    scale: 1,
    autoAlpha: 1,
    duration: 1

})




function checkGalaxy() {
    const ofTop = $('.s5').offset().top
    const nowScrollTop = $(window).scrollTop()
    if (nowScrollTop >= ofTop) {
        $('#stars').hide()
    } else {
        $('#stars').show()

    }

}
checkGalaxy()
$(window).on('scroll', throttle(checkGalaxy, 200))