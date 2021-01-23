const scrollDown = document.querySelector('#scroll')
const scrollTop = document.querySelector('#scroll-top')
const mail = document.querySelectorAll('#mail')
const height = innerHeight

scrollDown.addEventListener('click', () => {

    scrollBy({
        top: height,
        behavior: "smooth"
    })
    // scrollDown.style.display = 'none'
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
 


