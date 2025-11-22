import Header from "./componentes/header.js";
import Footer from "./componentes/footer.js";

document.querySelector('.header-navbar').innerHTML = Header()

document.querySelector('.footer-padrao').innerHTML = Footer()

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    // Toggle para abrir/fechar o menu
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});