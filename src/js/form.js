require('jquery.maskedinput/src/jquery.maskedinput')
import Cookie from "js-cookie";
export default class Form {
    constructor(el, onSuccess) {
        this.el = $(el)
        this.iName = this.el.find('input[name="name"]')
        this.iEmail = this.el.find('input[name="email"]')
        this.iPhone = this.el.find('input[name="phone"]')
        this.iAgree = this.el.find('input[name="agree"]')
        this.onSuccess = onSuccess
        this.isLoading = false
        this.errors = {}
        this.init()
    }
    getClientId() {
        if (!window.ga) return 'null'
        const tracker = ga.getAll()[0];
        const id = tracker.get('clientId');
        return id
    }
    validate() {
        const name = this.iName.val()
        const email = this.iEmail.val()
        const phone = this.iPhone.val()
        const agree = this.iAgree.attr('checked') === 'checked'
        if (!name) {
            this.errors.name = true
        }
        if (email) {
            const isValid = validateEmail(email)
            if (!isValid) {
                this.errors.email = true
            }
        }
        if (!phone) {
            this.errors.phone = true
        }
        if (phone.indexOf('_') > -1) {
            this.errors.phone = true
        }
        if (!agree) {
            this.errors.agree = true
        }
        if (Object.keys(this.errors).length === 0) return true
        Object.keys(this.errors).forEach(field => {
            if (field === 'name') {
                this.iName.addClass('error')
            }
            if (field === 'email') {
                this.iEmail.addClass('error')
            }
            if (field === 'phone') {
                this.iPhone.addClass('error')
            }
        })
        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        return false
    }
    resetErrors() {
        this.iName.removeClass('error')
        this.iEmail.removeClass('error')
        this.iPhone.removeClass('error')
        this.errors = {}
    }
    addListeners() {
        this.el.on('submit', e => {
            e.preventDefault()
            this.resetErrors()
            if (this.isLoading) return
            if (!this.validate()) return
            this.send()
        })
    }
    makeSent() {
        Cookie.set('form_sent', true, {
            expires: 365,
            
        })
    }
    checkSent() {
        const isSent = Cookie.get('form_sent')
        if (!isSent) return
        this.onSuccess()
    }
    send() {
        this.el.addClass('loading')
        this.isLoading = true
        const name = this.iName.val()
        const email = this.iEmail.val()
        const phone = this.iPhone.val()
        const data = new FormData()
        data.append('name', name)
        data.append('email', email)
        data.append('phone', phone);
        data.append('clientId', this.getClientId())
        $.ajax({
            method: 'POST',
            url: '/contact.php',
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            data,
            success: (data) => {
                this.onSuccess(data)
                this.makeSent()
            },
            complete: () => {
                this.isLoading = false
                this.el.removeClass('loading')

            }
        })
    }
    init() {
        this.checkSent()
        this.iPhone.mask('+7 (999) 999 99 99', { autoclear: false });
        this.addListeners()
    }
}