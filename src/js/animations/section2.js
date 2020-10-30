
gsap.fromTo('.s2', {opacity: 0, y: 150}, {
    scrollTrigger: {
        trigger: '.s2',
        pin: false,
        start: "top bottom+=50px",
        end: "+=1000",
        scrub: false, // fix can be in seconds (smooth delay)
        once: true

    },
    y: 0,
    opacity: 1,
    duration: .8
})