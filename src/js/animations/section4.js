gsap.to('.s4__clouds', {
    scrollTrigger: {
        trigger: ".s4__clouds",
        pin: false,
        start: "top bottom",
        end: "+=600",
        scrub: true, // fix can be in seconds (smooth delay)
        // once: true

    },
    y: '-20%'
})