/* the code below displays the class 'change' and then removes it from an icon and places it on the next icon */
/* this code creates a basic slideshow of the designated icons, whihc are in section 1 of the html */

const icons =document.querySelectorAll('.section-1-icons i')

let i = 1

setInterval(() =>{
    i++

    const icon = document.querySelector('.section-1-icons .change')

    icon.classList.remove('change')

    if (i >icons.length) {
        icons[0].classList.add('change')
        i = 1
    } else{
        icon.nextElementSibling.classList.add('change')
    }

}, 4000)


/* this code affects the target class (navbar and menu) by adding effects when they are clicked, then removing them */

document.querySelector('.menu').addEventListener('click', () => {

    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')
    })

})