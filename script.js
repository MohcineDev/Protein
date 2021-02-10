const scrollDown = document.querySelector('#scroll')
const scrollTop = document.querySelector('#scroll-top')
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