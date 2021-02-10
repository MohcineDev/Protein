const cancel = document.querySelector('input[type="button"]')
const btn = document.querySelector('form button')
const field = document.querySelectorAll('#field')
const form = document.querySelector('form')

cancel.addEventListener('click', () => {
    field.forEach(element => {
        element.value = ''
    });
})

field.forEach(element => {
    element.addEventListener('focus', () => {
        element.placeholder = ''
    })
    element.addEventListener('blur', () => {
        element.placeholder = element.attributes["data-name"].value
    }) 
})
