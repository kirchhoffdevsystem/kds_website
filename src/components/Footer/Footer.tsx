import css from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={css["footer-padrao"]}>
            <p>&copy; 2025 Kirchhoff Dev System — Soluções Digitais para Pequenos Empreendedores</p>
        </footer>
    )
}