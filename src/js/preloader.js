export default class Loader {
    constructor() {
        this.el = $('.preloader')
        this.items = this.el.children()
    }
    show() {
        this.el.fadeIn()
        this.timer = setInterval(() => {
            // this.items.
        }, 300) 
    }
    hide() {
        this.el.fadeOut()
    }
}