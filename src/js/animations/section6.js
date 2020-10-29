import SvgModel from "../svgModel"

$('.s6-step__num').each(function (index) {
    const svg = new SvgModel($(this).find('svg')[0], (index + 1) * 200)
    svg.start()
})

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