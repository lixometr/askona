import throttle from "lodash.throttle"
export default class SvgModel {
    constructor(el, speed) {
        this.el = $(el)
        this.items = this.el.find('circle')
        this.nowActive = 0;
        this.speed = speed || 300
    }

    start() {
        if (this.timer) this.clearInterval(this.timer)
        let tick = () => {
            this.next()
            this.makeActive()
            // this.timer = requestAnimationFrame(tick, this.speed)
        }
        tick = throttle(tick, this.speed)
        this.timer = setInterval(tick, this.speed)
        // tick()
    }
    stop() {
        clearTimeout(this.timer)
    }
    reset() {
        this.nowActive = 0
        this.items.attr('fill-opacity', '0.18')
        this.items.css('filter', '')
    }
    next() {
        this.nowActive++
        if (this.nowActive >= this.items.length) {
            this.reset()
        }
    }
    makeActive() {
        const activeItem = this.items.eq(this.nowActive)
        activeItem.attr('fill-opacity', '1')
        activeItem.css('filter', 'url(#dropshadow)')
    }
}