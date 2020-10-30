

class Slider {
    constructor() {
        this.nowSlide = 0
        this.prevSlide = 0
        this.itemsWrapper = $('.s4__items')
        this.imagesWrapper = $('.s4__images')
        this.items = this.itemsWrapper.children()
        this.images = this.imagesWrapper.children()
        this.arrowNext = $('.s4 .slider-arrow-next')
        this.arrowPrev = $('.s4 .slider-arrow-prev')
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

        Promise.all(resolvers).then(() => {
            Stars.setSpeed(1)
            this.isAnimating = false
        })
    }
    animateText() {
     
        return new Promise(resolve => {
            this.items.eq(this.prevSlide).fadeOut(400, () => {
                this.items.eq(this.nowSlide).fadeIn(400, () => resolve())

            })
        })
    }
    animateImages() {
        const tl = gsap.timeline()

        return new Promise(resolve => {
            this.images.eq(this.prevSlide).fadeOut(400, () => {
                this.images.eq(this.nowSlide).fadeIn(400, () => resolve())

            })
        })

    }

    addListeners() {
        const self = this
 
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