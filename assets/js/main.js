const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");


// Função para abrir/fechar menu de navegação
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('open-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('open-menu')
    })
}