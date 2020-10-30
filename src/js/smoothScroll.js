import SmoothScroll from './smooth-scroll'
// if (!isMac) {
    if($(window).width() > 768) {
        new SmoothScroll();
    }

// }