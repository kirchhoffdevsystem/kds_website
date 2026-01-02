import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import css from "./portifolio.module.css";

interface Projetos {
    img: string;
    alt: string;
    titulo: string;
    descricao: string;
    href: string;
}

const projetos: Projetos[] = [
    {
        img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
        alt: "Sistema de Agendamento para Salão",
        titulo: "Sistema de Agendamento para Salão — Exemplo",
        descricao: "Protótipo de um sistema completo para salões e barbearias, com agendamento online, painel administrativo e notificações automáticas.",
        href: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        alt: "Painel de Controle Financeiro",
        titulo: "Painel de Controle Financeiro — Demonstração",
        descricao: "Dashboard interativo com gráficos, cadastro de clientes, controle de receitas e despesas, ideal para microempreendedores.",
        href: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1560472355-536de3962603",
        alt: "Aplicativo mobile",
        titulo: "Aplicativo de Pedidos — Mockup",
        descricao: "Aplicativo fictício para restaurantes e lanchonetes com cardápio digital, carrinho, status do pedido e notificações ao cliente.",
        href: "#"
    }
]

export default function Portifolio_Page() {
    return (
        <>
            <Header />
            <section className={css.hero}>
                <h1>Portfólio & Projetos</h1>
                <p>Confira alguns dos projetos demonstrativos e protótipos desenvolvidos pela Kirchhoff Dev System.</p>
            </section>
            <section className={css.projetos}>
                {projetos.map((el: Projetos, i: number) => (
                    <div className={css.projeto} key={i}>
                        <img src={el.img} alt={el.alt} />
                        <h2>{el.titulo}</h2>
                        <p>{el.descricao}</p>
                        <a href={el.href} className={css["btn-ver"]}>Ler mais</a>
                    </div>
                ))}
            </section>
            <Footer />
        </>
    )
}