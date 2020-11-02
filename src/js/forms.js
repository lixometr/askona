import Form from "./form"
new Form('.static-form', (result) => {
    $('.static-form').parent().addClass('submited')
    console.log(result)
    if (result) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'event': 'registration_ergo', 'user_ergo_id': result });

    }

})

new Form('.popup-form', (result) => {
    $('.popup-form').parent().addClass('submited')
    console.log(result)
    if (result) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'event': 'registration_ergo', 'user_ergo_id': result });

    }
})