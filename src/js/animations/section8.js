class Toggle {
    constructor() {
        this.items = $('.s8-map__links li a')

        this.mapEl = $('.s8-map__main-inner')
        this.listEl = $('.s8-map__list')
        this.parent = $('.s8-map')
        this.activeCity = 'moscow'
        this.init()
    }
    loadData(type) {
        $.get(`/addresses/${type}.json`, data => {
            this.makeList(data, type)
        })
    }
    makeList(arr, type) {
        const html = `
        <li>
         <div class="s8-loc">
            <div class="s8-loc__top">
                <h4 class="s8-loc__title">{{name}}</h4>
                <p class="s8-loc__type">Фирменный магазин</p>
            </div>
            <p class="s8-loc__text">{{address}}<br>тел: {{phone}}
            </p>
        </div>
      </li>`
        const toInsert = arr.reduce((result, item) => {
            const h = html.replace('{{name}}', item.name).replace('{{address}}', item.address).replace('{{phone}}', item.phone)
            result += h
            return result
        }, '')
        $('.s8-map__list-'+type).html(toInsert)
    }
    openMap() {
        this.parent.removeClass('list')
        this.parent.addClass('map')

    }
    openList() {
        this.loadData(this.activeCity)
        this.parent.removeClass('map')
        this.parent.addClass('list')
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
    setMoscow() {
        this.loadData('moscow')
        this.activeCity = 'moscow'
        this.parent.removeClass('peter')
        this.parent.addClass('moscow')
    }
    setPeter() {
        this.loadData('peter')
        this.activeCity = 'peter'

        this.parent.removeClass('moscow')
        this.parent.addClass('peter')
    }
    init() {
        this.addListeners()
        const self = this
        $('.s8-map__select').selectric().on('change', function () {
            const value = $(this).val()
            if (value === 'moscow') {
                self.setMoscow()
            } else {
                self.setPeter()
            }

        })
    }
}
new Toggle()
import 'selectric/public/jquery.selectric'

