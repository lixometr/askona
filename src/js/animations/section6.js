
gsap.to('.s6__clouds', {
    scrollTrigger: {
        trigger: ".s6__clouds",
        pin: false,
        start: "top bottom",
        end: "+=400",
        scrub: true, // fix can be in seconds (smooth delay)
        // once: true

    },
    y: '-20%'
})