class Toggle {
    constructor() {
        this.items = $('.s8-map__links li a')

        this.mapEl = $('.s8-map__main-inner')
        this.listEl = $('.s8-map__list')
        this.parent = $('.s8-map')
        this.init()
    }
    openMap() {
        // this.mapEl.show()
        // this.listEl.hide()
        this.parent.removeClass('s8-map__main_list')

    }
    openList() {
        // this.mapEl.hide()
        // this.listEl.show()
        this.parent.addClass('s8-map__main_list')
        
    }
    addListeners() {
        const self = this
        this.items.on('click', function (e) {
            e.preventDefault()
            if ($(this).parent().index() === 0) {
                self.openMap()
            } else {
                self.openList()
            }
        })
    }
    init() {
        this.addListeners()
    }
}
new Toggle()
import 'selectric/public/jquery.selectric'

$('.s8-map__select').selectric()