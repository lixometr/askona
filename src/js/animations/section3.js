const image1 = '.s3 .s3__image-1'
const image2 = '.s3 .s3__image-2'

gsap.to(image1, {
    scrollTrigger: {
        trigger: '.s3',
        pin: false,
        start: "top bottom-=200px",
        end: "+=1200",
        scrub: 1.8, // fix can be in seconds (smooth delay)
        // once: true

    },
    y: '-=180px'
})
gsap.to(image2, {
    scrollTrigger: {
        trigger: '.s3',
        pin: false,
        start: "top top",
        end: "+=1400",
        scrub: 1.8, // fix can be in seconds (smooth delay)
        // once: true

    },
    y: '-=120px'
})