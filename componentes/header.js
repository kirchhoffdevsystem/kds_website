import link from "../utils/links.js";

export default function Header() {
    return `
        <div class="logo">Kirchhoff Dev System</div>
        <nav class="navbar">
        <a href=${link.index}>Início</a>
            <a href=${link.servicos}>Serviços</a>
            <a href=${link.sobre}>Sobre</a>
            <a href=${link.portifolio}>Portfólio</a>
        <a href=${link.contato} class="active btn-nav">Contato</a>
            <div class="menu-toggle" id="menu-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="nav-links" id="nav-links">
                <li><a href="${link.index}">Início</a></li>
                <li><a href="${link.servicos}">Serviços</a></li>
                <li><a href="${link.sobre}">Sobre</a></li>
                <li><a href="${link.portifolio}">Portfólio</a></li>
                <li><a href="${link.contato}" class="active btn-nav">Contato</a></li>
            </ul>
        </nav>
    `;
}