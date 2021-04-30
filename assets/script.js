/* the code below displays the class 'change' and then removes it from an icon and places it on the next icon */


const icons = document.querySelectorAll('section-1-icons i')     /* allows selecting all icons */

let i = 1 /* sets an increment counter to go through all the counters */

setInterval(() =>{

    i++ /* add 1 to the increment */

    const icon = document.querySelector('.section-1-icons i.change');
    
    icon.classList.remove('change');

    if (i < icons.length){

        icons[0].classList.add('change')

        i=1

    } else {
         icon.nextElementSibling.classList.add('change');
    }

   

}, 4000) 