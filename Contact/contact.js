const cancel = document.querySelector('input[type="button"]')
const field = document.querySelectorAll('#field')

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