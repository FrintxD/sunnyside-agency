var tableMenu = document.querySelector('.table');
var iconHamburguer = document.getElementById('icon-hamburger');


function open(){
    iconHamburguer.addEventListener('click', (e)=>{
        //Toggle é usado para abrir e fechar coisas.
        tableMenu.classList.toggle('open');
   })
}

open()



