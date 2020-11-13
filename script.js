const scrollDown = document.querySelector('#scroll')
const scrollTop = document.querySelector('#scroll-top')
const mail = document.querySelectorAll('#mail')

const display = document.querySelector('#display')
const hide = document.querySelector('#hide')
const links = document.querySelector('.links')

const height = innerHeight


scrollDown.addEventListener('click', () => {

    scrollBy({
        top: height,
        behavior: "smooth"
    })
    scrollDown.style.display = 'none'
})

document.addEventListener('scroll', () => {

    if (scrollY >= height * 2) {
        scrollTop.style.display = 'block'
    }
    else
        scrollTop.style.display = 'none'
})

scrollTop.addEventListener('click', () => {

    scroll({
        top: 0,
        behavior: "smooth"
    })

})


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
})

const hideBtn = () => {
    hide.style.display = 'none'
    display.style.display = 'block'
    links.style.right = '-100%'
}

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