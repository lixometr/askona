import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger.min.js"
import $ from "jquery"
global.$ = $
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
    markers: false
})
global.gsap = gsap

import Stars from './stars'

global.Stars = Stars

// require('slick-carousel')
require('./my')

require('./animations/section1')
require('./animations/section2')
require('./animations/section3')
require('./animations/section4')
require('./animations/section5')
require('./animations/section6')
require('./cursorFollow')
require('./slider1')
require('./slider2')
require('./parallax')
require('./fullpage')
require('./menu')
let prevScroll = $(window).scrollTop()
$(window).on('scroll', e => {
    const nowScrollTop = $(window).scrollTop()
    if (nowScrollTop > prevScroll) {
        Stars.updateStarsY(-3)

    } else {
        Stars.updateStarsY(3)

    }
    prevScroll = nowScrollTop
})
