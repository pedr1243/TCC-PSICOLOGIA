// Início de um função de menu
function toggleMenu() {
    //Acessamos os elementos a ser modificados
    const navLinks = document.querySelector('.nav-links')
    const hamburguer = document.querySelector('.hamburguer')
    //inserimos uma nova classe

    navLinks.classList.toggle('active')


    //Criamos uma condição (se) for ativado a classe
    if (navLinks.classList.contains('active')) {
        hamburguer.innerHTML = '&times;'
    } else {
        hamburguer.innerHTML = '&#9776;'
    }
}

const hamburguer = document.querySelector('hamburguer')
hamburguer.addEventListener('click', toggleMenu)



//faq
function toggleResposta(num) {
    const resposta = document.getElementById(`resposta${num}`);
    const icon = resposta.previousElementSibling.querySelector('.icon');

    resposta.classList.toggle('ativo');

    // Troca o ícone
    if (resposta.classList.contains('ativo')) {
        icon.textContent = '-'; // Ícone de "menos" quando a resposta está visível
    } else {
        icon.textContent = '+'; // Ícone de "mais" quando a resposta está oculta
    }
}


