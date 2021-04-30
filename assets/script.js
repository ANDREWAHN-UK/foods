/* the code below displays the class 'change' and then removes it from an icon and places it on the next icon */


const icons = document.querySelectorAll('section-1-icons i')     /* allows selecting all icons */


setInterval(() =>{  

    const icon = document.querySelector('.section-1-icons i.change');
    
    icon.classList.remove('change');  
   
    icon.nextElementSibling.classList.add('change') ;  
   
}, 4000) 