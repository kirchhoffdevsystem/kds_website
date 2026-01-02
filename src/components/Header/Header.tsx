import { NavLink } from 'react-router-dom';

import { links_share as link } from '../../routes/routes';
import css from "./header.module.css"

export default function Header() {
    return (
        <>
            <header className={css["header-navbar"]}>
                <div className={css.logo}>Kirchhoff Dev System</div>
                <nav className={css.navbar}>
                    <NavLink to={link.home} className={({ isActive }) => (isActive ? css.navlinkAtivo : css.navlink)}>Início</NavLink>

                    <NavLink to={link.servicos} className={({ isActive }) => (isActive ? css.navlinkAtivo : css.navlink)} >Serviços</NavLink>

                    <NavLink to={link.blog} className={({ isActive }) => (isActive ? css.navlinkAtivo : css.navlink)}>Blog</NavLink>

                    <NavLink to={link.sobre} className={({ isActive }) => (isActive ? css.navlinkAtivo : css.navlink)}>Sobre</NavLink>

                    <NavLink to={link.portifolio} className={({ isActive }) => (isActive ? css.navlinkAtivo : css.navlink)}>Portfólio</NavLink>

                    <NavLink to={link.contato} className={({ isActive }) => (isActive ? css.navlinkAtivo : css.navlink)}>Contato</NavLink>

                    <div className={css["menu-toggle"]} id="menu-toggle">
                        <span className={css.bar}></span>
                        <span className={css.bar}></span>
                        <span className={css.bar}></span>
                    </div>
                    <ul className={css["nav-links"]} id="nav-links">
                        <li><NavLink to={link.home} className={({ isActive }) => (isActive ? css.navlinkAtivo : css.navlink)}>Início</NavLink></li>

                        <li><NavLink to={link.servicos} className={({ isActive }) => (isActive ? css.navlinkAtivo : css.navlink)}>Serviços</NavLink></li>

                        <li><NavLink to={link.sobre} className={({ isActive }) => (isActive ? css.navlinkAtivo : css.navlink)}>Sobre</NavLink></li>

                        <li><NavLink to={link.portifolio} className={({ isActive }) => (isActive ? css.navlinkAtivo : css.navlink)}>Portfólio</NavLink></li>

                        <li><NavLink to={link.contato} className={({ isActive }) => (isActive ? css.navlinkAtivo : css.navlink)}>Contato</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}