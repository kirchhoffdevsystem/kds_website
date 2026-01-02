import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import css from "./servicos.module.css";

interface Servicos {
    titulo: string,
    descricao: string,
    beneficios: {
        bn1: string,
        bn2: string,
        bn3: string,
    },
    ex_uso: {
        ex1: string,
        ex2: string,
        ex3: string,
    }
}

const servicos: Servicos[] = [
    {
        titulo: "Desenvolvimento de Sites",
        descricao: " Criamos sites profissionais, rápidos e totalmente responsivos, perfeitos para apresentar sua marca ao público.",
        beneficios: {
            bn1: "Maior credibilidade para o negócio",
            bn2: "Melhor presença digital na região",
            bn3: "Design moderno e adaptado para celular",
        },
        ex_uso: {
            ex1: "Site institucional para salão de beleza",
            ex2: "Página de serviços para mecânico local",
            ex3: "Cardápio online para lanchonetes e cafés",
        }
    },
    {
        titulo: "Sistemas Web Personalizados",
        descricao: "Desenvolvemos sistemas sob medida para digitalizar processos internos e automatizar tarefas do seu negócio.",
        beneficios: {
            bn1: "Automação de rotinas administrativas",
            bn2: "Organização de dados em um só lugar",
            bn3: "Relatórios e dashboards personalizados",
        },
        ex_uso: {
            ex1: "Sistema de controle financeiro para mercados",
            ex2: "Sistema de estoque para lojas locais",
            ex3: "Sistema de agendamento para salões e barbearias",
        }
    },
    {
        titulo: "Aplicativos Mobile Android",
        descricao: "Apps desenvolvidos de forma personalizada para conectar sua empresa aos clientes e melhorar sua operação.",
        beneficios: {
            bn1: "Experiência moderna para o cliente",
            bn2: "Mais praticidade e mobilidade",
            bn3: "Funcionalidades exclusivas conforme a necessidade",
        },
        ex_uso: {
            ex1: "App de pedidos para restaurantes",
            ex2: "App de agenda para professores autônomos",
            ex3: "App de acompanhamento de serviços para oficinas",
        }
    },
    {
        titulo: "Consultoria e Automação",
        descricao: "Analisamos sua rotina e criamos soluções simples para transformar processos manuais em processos digitais.",
        beneficios: {
            bn1: "Redução de erros operacionais",
            bn2: "Economia de tempo",
            bn3: "Melhor organização das tarefas",
        },
        ex_uso: {
            ex1: "Transformar planilhas em sistemas reais",
            ex2: "Automatizar listas de clientes e estoque",
            ex3: "Digitalizar formulários e fichas em papel",
        }
    }
]

export default function Servicos_Page() {
    return (
        <>
            <Header />
            <section className={css.hero}>
                <h1>Serviços</h1>
                <p>Soluções digitais criadas para facilitar a rotina dos pequenos empreendedores.</p>
            </section>

            <section className={css.servicos}>
                {servicos.map((el: Servicos, i: number) => (
                    <div className={css.servico} key={i}>
                        <h2>{el.titulo}</h2>
                        <p className={css.descricao}>{el.descricao}</p>

                        <h3>Benefícios</h3>
                        <ul>
                            <li>{el.beneficios.bn1}</li>
                            <li>{el.beneficios.bn2}</li>
                            <li>{el.beneficios.bn3}</li>
                        </ul>

                        <h3>Exemplos de uso</h3>
                        <p className={css.exemplos}>
                            • {el.ex_uso.ex1}<br />
                            • {el.ex_uso.ex2}e estoque<br />
                            • {el.ex_uso.ex3}
                        </p>
                    </div>
                ))}
            </section>

            <Footer />
        </>
    )
}