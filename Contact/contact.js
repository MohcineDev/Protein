const btn = document.querySelector('form button')
const field = document.querySelectorAll('#field')
const form = document.querySelector('form')
const popup = document.querySelector('.popup')

const emptyField = () => {
    field.forEach(element => {
        element.value = ''
    });
}

field.forEach(element => {
    element.addEventListener('focus', () => {
        element.placeholder = ''
    })
    element.addEventListener('blur', () => {
        element.placeholder = element.attributes["data-name"].value
    })
})

form.addEventListener('submit', (a) => {
    a.preventDefault()
    emptyField()
    popup.style.display = "block"
})

popup.addEventListener('click', (a) => {
    if (a.target.className === "popup") {
        popup.style.display = "none"
    }
})
