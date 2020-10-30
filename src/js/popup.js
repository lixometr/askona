export default class Popup {
    constructor(el, trigger) {
        this.el = $(el)
        this.overlay = this.el.find('.popup-overlay')
        this.closeEl = this.el.find('.close')
        this.trigger = $(trigger)
        this.init()
    }
    open() {
        this.el.fadeIn()
        
    }
    close() {
        this.el.fadeOut()

    }
    addListeners() {
        this.trigger.on('click', (e) => {
            e.preventDefault()
            this.open()
        })
        this.overlay.on('click', () => {
            this.close()
        })
        this.closeEl.on('click', () => {
            this.close()
        })
    }
    init() {
        this.addListeners()
    }
}