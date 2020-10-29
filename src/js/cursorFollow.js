class CursorFollow {
    constructor() {
        this.el = document.querySelector('#cursor-follow')
        this.width = this.el.offsetWidth
        this.height = this.el.offsetHeight
        this.targetElements = ['button', 'a', '.hover', 'input', 'select']
        this.init()
    }
    makeActive() {
        this.el.classList.add('active')
        console.log('active')
    }
    removeActive() {
        this.el.classList.remove('active')

    }
    addListeners() {
        document.body.addEventListener('mousemove', (e) => {
            const x = e.clientX
            const y = e.clientY
            this.el.style.left = x - (this.width / 2) + 'px'
            this.el.style.top = y - (this.height / 2) + 'px'
        })
      
        this.targetElements.forEach(selector => {
            const elements = [...document.querySelectorAll(selector)]
            elements.forEach(el => {
                el.addEventListener('mouseover', () => {
                    this.makeActive()
                })
                el.addEventListener('mouseout', () => {
                    this.removeActive()
                })
            })
        })

    }
    init() {
        this.addListeners()
    }
}
new CursorFollow()