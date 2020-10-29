import SvgModel from "./svgModel"
const date = new Date(2020, 9, 30, 11)


class Timer {
    constructor() {
        this.date = date

        this.daysWrapper = $('.s5-timer__value_1')
        this.daysNum = this.daysWrapper.find('.s5-timer__value-num')
        this.daysText = this.daysWrapper.find('.s5-timer__value-text')
        this.daysSvg = this.daysWrapper.find('svg')

        this.hoursWrapper = $('.s5-timer__value_2')
        this.hoursNum = this.hoursWrapper.find('.s5-timer__value-num')
        this.hoursText = this.hoursWrapper.find('.s5-timer__value-text')
        this.hoursSvg = this.hoursWrapper.find('svg')

        this.minutesWrapper = $('.s5-timer__value_3')
        this.minutesNum = this.minutesWrapper.find('.s5-timer__value-num')
        this.minutesText = this.minutesWrapper.find('.s5-timer__value-text')
        this.minutesSvg = this.minutesWrapper.find('svg')


        this.daysTimer = new SvgModel(this.daysSvg, 500)
        this.hoursTimer = new SvgModel(this.hoursSvg, 400)
        this.minutesTimer = new SvgModel(this.minutesSvg, 300)
        this.init()
    }

    getTimeRemaining() {
        var t = Date.parse(this.date) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    wordForm(num, word) {
        const cases = [2, 0, 1, 1, 1, 2];
        return word[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
    }

    setDays(days) {
        this.daysNum.text(days)
        const daysText = this.wordForm(days, ['день', 'дня', 'дней'])
        this.daysText.text(daysText)
    }
    setMinutes(min) {
        this.minutesNum.text(min)
        const minText = this.wordForm(min, ['минута', 'минуты', 'минут'])
        this.minutesText.text(minText)
    }
    setHours(h) {
        this.hoursNum.text(h)
        const secText = this.wordForm(h, ['час', 'часа', 'часов'])
        this.hoursText.text(secText)
    }
    start() {
        const tick = () => {
            const { days, hours, minutes, seconds } = this.getTimeRemaining()
            this.setDays(days)
            this.setHours(hours)
            this.setMinutes(minutes)
        }
        this.timer = setInterval(tick, 1000)
        tick()
    }
    init() {

        this.daysTimer.start()
        this.minutesTimer.start()
        this.hoursTimer.start()
        this.start()
    }
}

new Timer()