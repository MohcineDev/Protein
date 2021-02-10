
const display = document.querySelector('#display')
const hide = document.querySelector('#hide')
const YEAR = document.querySelector('#year')
const links = document.querySelector('.links')
const mail = document.querySelectorAll('#mail')

// hide the placeholder when mouse click - enter - focus
mail.forEach(item => {

    item.addEventListener('focus', () => {
        item.setAttribute('placeholder', '')
    })

    item.addEventListener('blur', () => {
        item.setAttribute('placeholder', 'Your Email ...')
    })
});


display.addEventListener('click', function () {
    this.style.display = 'none'
    hide.style.display = 'block'
    links.style.right = '0px'
    this.style.animation = 'rotate .5s ease-out';
    hide.style.animation = 'rotate .5s ease-out';
})

const hideBtn = () => {

    if (this.innerWidth <= 768) {
        hide.style.display = 'none'
        display.style.display = 'block'
        links.style.right = '-100%'
    }
}

//hide nav bar
hide.addEventListener('click', function () {
    hideBtn()
})

//hide the nav when an item is clicked
for (let i = 0; i < links.children.length; i++) {

    links.children[i].addEventListener('click', () => {
        hideBtn()
    })
}

window.addEventListener('resize', () => {
    if (this.innerWidth > 768) {
        display.style.display = 'none'
        hide.style.display = 'none'
    }
    else {
        display.style.display = 'block'
        hide.style.display = 'none'
        links.style.right = '-100%'
    }
})

YEAR.textContent = new Date().getFullYear()
