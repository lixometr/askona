import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger.min.js"
import Preloader from "./preloader"
import $ from "jquery"
require('./ismac')
global.$ = $
gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
    markers: false
})
global.gsap = gsap

import Stars from './stars'

global.Stars = Stars
const preloader = new Preloader
// preloader.show()
$(window).on('load', () => {
    preloader.hide()
    
    require('./animations/section1')
    require('./animations/section2')
    require('./animations/section3')
    require('./animations/section4')
    require('./animations/section5')
    require('./animations/section6')
    require('./animations/section8')
    require('./cursorFollow')
    require('./slider1')
    require('./slider2')
    require('./parallax')
    require('./menu')
    require('./scrollTo')
    require('./sticks')
    require('./scrollArrow')
    require('./smoothScroll')
})

let prevScroll = $(window).scrollTop()
$(window).on('scroll', e => {
    const nowScrollTop = $(window).scrollTop()
    if (nowScrollTop > prevScroll) {
        Stars.updateStarsY(-5)

    } else {
        Stars.updateStarsY(5)

    }
    prevScroll = nowScrollTop
})
