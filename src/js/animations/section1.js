const throttle = require("lodash.throttle")
const { default: stars } = require("../stars")

/**
 * autoAlfa: 0
 * visibilit: hidden;
 */
function scrollParallax() {
    gsap.to('.galaxy', {
        scrollTrigger: {
            trigger: ".s1",
            pin: false,
            start: "top top-=200px",
            duration: 1,
            toggleActions: "play none none reverse",


            // end: "+=400",
            scrub: false, // fix can be in seconds (smooth delay)
            // once: true

        },
        y: -250
    })
    gsap.to('.s1__box', {
        scrollTrigger: {
            trigger: ".s1",
            pin: false,
            start: "top top-=200px",
            duration: .9,
            toggleActions: "play none none reverse",

            // end: "+=400",
            scrub: false, // fix can be in seconds (smooth delay)
            // once: true

        },
        y: -100
    })
    gsap.to('.s1__image', {
        scrollTrigger: {
            trigger: ".s1",
            pin: false,
            start: "top top=-200px",
            toggleActions: "play none none reverse",

            // end: "+=200",
            duration: .9,
            scrub: false, // fix can be in seconds (smooth delay)
            // once: true

        },
        y: 40
    })
}

if ($(window).width() > 991) {
    scrollParallax()
}

// gsap.fromTo('.header__box, .s1__box', {
//     opacity: 0,
//     y: -100
// }, {
//     y: 0,
//     opacity: 1,
//     autoAlpha: 1,
//     duration: .9
// })

gsap.fromTo(' .s1__title', {
    opacity: 0,
    x: -100
}, {
    x: 0,
    opacity: 1,
    autoAlpha: 1,
    duration: .9
})
gsap.fromTo(' .s1__subtitle, .s1__btn', {
    opacity: 0,
    y: 100
}, {
    y: 0,
    opacity: 1,
    autoAlpha: 1,
    duration: .9,
    delay: .5
})
gsap.fromTo('.header__box', {
    opacity: 0,
    y: -100
}, {
    y: 0,
    opacity: 1,
    autoAlpha: 1,
    duration: .9,
    delay: .5

})
gsap.fromTo('.galaxy', {
    opacity: 0,
    y: 100
}, {
    y: 0,
    opacity: 1,
    autoAlpha: 1,
    duration: .9,
    delay: .3

})
gsap.fromTo('.s1__image', {
    opacity: 0,
    x: 100
}, {
    x: 0,
    opacity: 1,
    autoAlpha: 1,
    duration: .9,
    delay: .8

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
        if(!Stars.isDestroyed) {
            Stars.destroy()

        }
    } else {
        $('#stars').show()
        if (Stars.isDestroyed) {
            Stars.init()
        }

    }

}
checkGalaxy()
$(window).on('scroll', throttle(checkGalaxy, 200))