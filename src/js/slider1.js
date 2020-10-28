

class Slider {
    constructor() {
        this.nowSlide = 0
        this.prevSlide = 0
        this.itemsWrapper = $('.s2__items')
        this.imagesWrapper = $('.s2__images')
        this.items = this.itemsWrapper.children()
        this.images = this.imagesWrapper.children()
        this.tabsWrapper = $('.s2__organs')
        this.tabs = this.tabsWrapper.children()
        this.arrowNext = $('.s2 .slider-arrow-next')
        this.arrowPrev = $('.s2 .slider-arrow-prev')
        this.isAnimating = false
        this.init()
    }
    setSlide(idx) {
        if(this.isAnimating) return
        this.prevSlide = this.nowSlide
        this.nowSlide = idx
        this.animate()
    }
    next() {
        this.prevSlide = this.nowSlide
        if (this.nowSlide >= this.items.length - 1) {
            this.nowSlide = 0
        } else {
            this.nowSlide++
        }
    }
    prev() {
        this.prevSlide = this.nowSlide

        if (this.nowSlide <= 0) {
            this.nowSlide = this.items.length - 1
        } else {
            this.nowSlide--
        }
    }
    slideNext() {
        if(this.isAnimating) return

        this.next()
        this.animate()
    }
    slidePrev() {
        if(this.isAnimating) return
        this.prev()
        this.animate()
    }
    animate() {
        this.isAnimating = true
        if (this.prevSlide < this.nowSlide) {
            Stars.setSpeed(20)
        } else {
            Stars.setSpeed(-20)

        }
        const resolvers = []
        resolvers.push(this.animateText())
        resolvers.push(this.animateImages())
        this.animateTabs()

        Promise.all(resolvers).then(() => {
            Stars.setSpeed(1)
            this.isAnimating = false
        })
    }
    animateText() {
        // const tl = gsap.timeline({
        //     onComplete: () => {
        //         Stars.setSpeed(1)
        //     }
        // })
        // tl.fromTo(this.items.eq(this.prevSlide)[0], {
        //     opacity: 1,

        // }, {
        //     opacity: 0,
        //     display: 'none'
        // })
        // tl.to(this.items.eq(this.nowSlide)[0], {
        //     opacity: 1,
        //     display: 'block'
        // })
        return new Promise(resolve => {
            this.items.eq(this.prevSlide).fadeOut(400, () => {
                this.items.eq(this.nowSlide).fadeIn(400, () => resolve())

            })
        })
    }
    animateImages() {
        const tl = gsap.timeline()
        // tl.fromTo(this.images.eq(this.prevSlide)[0], {
        //     opacity: 1,
        // }, {
        //     opacity: 0,
        //     display: 'none'
        // })
        // tl.to(this.images.eq(this.nowSlide)[0], {
        //     opacity: 1,
        //     display: 'block',
        //     position: 'relative'
        // })
        return new Promise(resolve => {
            this.images.eq(this.prevSlide).fadeOut(400, () => {
                this.images.eq(this.nowSlide).fadeIn(400, () => resolve())

            })
        })

    }
    animateTabs() {

        this.tabs.removeClass('s2-organ_active')
        const activeTab = this.tabs.eq(this.nowSlide)
        const prevTab =  this.tabs.eq(this.prevSlide)
        activeTab.addClass('s2-organ_active')
        const prevLeft = prevTab.position().left
        console.log(prevLeft)
        activeTab.css('left', 0)
    }
    addListeners() {
        const self = this
        this.tabs.on('click', function () {
            const idx = $(this).index()
            console.log(idx)
            self.setSlide(idx)
        })
        this.arrowNext.on('click', () => {
            this.slideNext()
        })
        this.arrowPrev.on('click', () => {
            this.slidePrev()
        })
    }
    init() {
        this.addListeners()
    }

}

new Slider()