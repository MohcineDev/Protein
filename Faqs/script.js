const QUESTION = document.querySelectorAll('.question')



QUESTION.forEach(elem =>  elem.addEventListener('click', (e) => {
    e.target.previousElementSibling.classList.toggle('rotate')
    e.target.nextElementSibling.classList.toggle('show')
 
}))