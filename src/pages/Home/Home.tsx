import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import css from "./home.module.css";
import { contt_empresa as ctt } from "../Contato/Contato";

export default function Home_Page() {
    return (
        <>
            <Header />
            <section className={css.servicos} id="servicos">
                <h2>Nossos Serviços</h2>
                <div className={css.cards}>
                    <div className={css.card}>
                        <h3>Desenvolvimento de Sites</h3>
                        <p>Sites profissionais, rápidos e responsivos para apresentar sua empresa ao mundo.</p>
                    </div>
                    <div className={css.card}>
                        <h3>Sistemas Web Personalizados</h3>
                        <p>Sistemas sob medida para automatizar rotinas como vendas, estoque e financeiro.</p>
                    </div>
                    <div className={css.card}>
                        <h3>Aplicativos Mobile</h3>
                        <p>Aplicativos Android e iOS projetados para facilitar processos do seu negócio.</p>
                    </div>
                </div>
            </section>

            <section className={css.sobre} id="sobre">
                <h2>Sobre a Kirchhoff Dev System</h2>
                <p>
                    Somos uma empresa de tecnologia focada em soluções digitais para pequenos empreendedores do litoral.
                    Desenvolvemos sites, sistemas e aplicativos que tornam a rotina mais simples, moderna e eficiente.
                </p>
            </section>

            <section className={css.depoimentos}>
                <h2>Depoimentos</h2>
                <div className={css.cards}>
                    <div className={css.card}>
                        <p>"Sistema excelente! Facilitou muito o atendimento do meu salão. Simples e rápido."</p>
                        <span>- Carolina, Salão Bella</span>
                    </div>
                    <div className={css.card}>
                        <p>"O aplicativo criado trouxe muito mais organização para minha oficina."</p>
                        <span>- Marcos, Oficina Litoral</span>
                    </div>
                </div>
            </section>

            <section className={css.contato} id="contato">
                <h2>Fale Conosco</h2>
                <p>Entre em contato e solicite seu orçamento gratuitamente.</p>
                <a href={ctt.tel_principal.whats} target="_blank" className={css["btn-cta"]}>Enviar Mensagem</a>
            </section>
            <Footer />
        </>
    )
}