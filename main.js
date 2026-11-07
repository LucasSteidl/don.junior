/**
 * Project: Landing Page NutriRJ
 * Author: Lucas Steidl de Oliveira
 * Contact: Whatsapp - 11 95637-4467 / Email - lucas.steidl63@gmail.com
 * Year: 2026
 */

// Efeito de mudar o header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = '#ffffffef';
    } else {
        header.style.padding = '20px 0';
        header.style.background = '#ffffff';
    }
});

// Scroll suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
