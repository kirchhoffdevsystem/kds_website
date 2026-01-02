import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import css from "./blog.module.css"

interface Posts {
    img: string,
    alt: string,
    titulo: string,
    texto: string,
    href: string
}

const posts: Posts[] = [
    {
        img: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
        alt: "Digitalização de pequenos negócios",
        titulo: "Por que pequenos negócios do Litoral precisam digitalizar processos?",
        texto: "A transformação digital deixou de ser tendência e virou necessidade. Pequenos empreendedores podem ganhar tempo, reduzir erros e vender mais com ferramentas simples...",
        href: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
        alt: "Custo de sistemas web",
        titulo: "Quanto custa um sistema web para minha empresa?",
        texto: "O preço de um sistema varia conforme a complexidade, funcionalidades e integração. Mas existem soluções acessíveis para pequenos negócios — e o investimento retorna rápido...",
        href: "#"
    },
    {
        img: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
        alt: "Aplicativos automatizando rotina",
        titulo: "Como um aplicativo pode automatizar sua rotina?",
        texto: "Um app pode transformar a forma como você organiza pedidos, agendamentos e atendimento ao cliente. Entenda como isso funciona na prática e como aplicar no seu negócio...",
        href: "#"
    }
]

export default function Blog_Page() {
    return (
        <>
            <Header />
            <section className={css.hero}>
                <h1>Blog & Conteúdos</h1>
                <p>Dicas, insights e conhecimento para ajudar empreendedores do litoral a crescer com tecnologia.</p>
            </section>

            <section className={css.posts}>
                {posts.map((el: Posts, i: number) => (
                    <div className={css.post} key={i}>
                        <img src={el.img} alt={el.alt} />
                        <h2>{el.titulo}</h2>
                        <p>{el.texto}</p>
                        <a href={el.href} className={css["btn-leia"]}>Ler mais</a>
                    </div>
                ))}
            </section>

            <Footer />
        </>
    )
}