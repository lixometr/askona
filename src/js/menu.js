class Burger {
    constructor({ open, close }) {
        this.el = $('.header .header__menu-btn')
        this.menuIcon = this.el.find('.menu-icon')
        this.ring = this.el.find('.ring')
        this.isOpen = false;
        this.onOpen = open || function () { };
        this.onClose = close || function () { };
        this.init()
    }
    makeActive() {
        this.isOpen = true
        this.menuIcon.addClass('active')
        this.runPulse()
        this.onOpen()
    }
    runPulse() {
        this.ring.addClass("run");
    }
    removeActive() {
        this.isOpen = false
        this.menuIcon.removeClass('active')
        this.runPulse()
        this.ring.removeClass("run");
        this.onClose()



    }
    addListeners() {
        this.el.on('click', () => {
            if (this.isOpen) {
                this.removeActive()
            } else {
                this.makeActive()
            }
        })
    }
    init() {
        this.addListeners()
    }
}
class Menu {
    constructor() {
        this.burger = new Burger({
            open: this.open.bind(this),
            close: this.close.bind(this)
        })
        this.wrapperAll = $('.wrapper-all')
        // this.el = ''
    }

    open() {
        // this.burger.makeActive()
        // const top = $(window).scrollTop()
        // this.tempWrapper = $('<div class="temp-wrapper-all"></div>')
        // this.wrapperAll.wrap(this.tempWrapper)
        // this.wrapperAll.css('height', this.wrapperAll.height() + 'px')
        // $('.temp-wrapper-all').scrollTop(top)
        $('body').addClass("nav-open")


    }
    close() {
        // this.burger.removeActive()
        $('body').removeClass("nav-open")
        // $('.temp-wrapper-all').on('transitionend', () => {
        //     const top = $('.temp-wrapper-all').scrollTop()
        //     this.wrapperAll.insertAfter($('.temp-wrapper-all'))
        //     this.wrapperAll.css('height', '')
        //     $('.temp-wrapper-all').remove()
        //     $(window).scrollTop(top)
        // })

    }
    addListeners() {

    }
    init() {
        this.addListeners()
    }
}

new Menu()