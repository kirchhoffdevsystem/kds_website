import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import css from "./contato.module.css"

interface TelCttEmpresa {
    tel: string, whats: string, nome: string
}

interface Contt_empresa {
    nome: string,
    email: string,
    tel_principal: TelCttEmpresa
    tel_secundario: TelCttEmpresa,
    regiao: string,
    horario_atendimento: {
        normal: string, sabado: string
    }
}

export const contt_empresa: Contt_empresa = {
    nome: "Kirchhoff Dev System",
    email: "kirchhoffdevsystem@gmail.com",
    tel_principal: { tel: "(41) 98898-6065", whats: "https://wa.me/5541988986065", nome: "Karla Kirchhoff" },
    tel_secundario: { tel: "(41) 98402-8350", whats: "https://wa.me/554984028350", nome: "Matheus Babireski" },
    regiao: "Paranaguá — Paraná",
    horario_atendimento: { normal: "Segunda a Sexta — 08h às 18h", sabado: "Sábado — 08h às 12h" }
}

function Form() {
    return (
        <form action="#" method="POST" className={css["form-contato"]}>
            <label>Nome</label>
            <input type="text" placeholder="Seu nome" required />

            <label>E-mail</label>
            <input type="email" placeholder="seuemail@email.com" required />

            <label>Telefone</label>
            <input type="tel" placeholder="(xx) xxxxx-xxxx" required />

            <label>Mensagem</label>
            <textarea placeholder="Como podemos ajudar?" required></textarea>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default function Contato_Page() {
    return (
        <>
            <Header />
            <section className={css.hero}>
                <h1>Fale Conosco</h1>
                <p>Entre em contato para solicitar um orçamento ou tirar suas dúvidas.</p>
            </section>

            <section className={css["contato-container"]}>
                <div className={css["form-box"]}>
                    <h2>Envie uma Mensagem</h2>
                    <Form />
                    <a href={contt_empresa.tel_principal.whats} target="_blank" className={css["btn-whatsapp"]}>
                        📱 Falar pelo WhatsApp
                    </a>
                </div>

                <div className={css["info-box"]}>
                    <h2>Informações</h2>

                    <p><strong>📍 Localização:</strong><br />{contt_empresa.regiao}</p>

                    <p><strong>🕒 Horário de Atendimento:</strong><br />
                        {contt_empresa.horario_atendimento.normal}<br />{contt_empresa.horario_atendimento.sabado}
                    </p>

                    <p><strong>📧 E-mail:</strong><br />{contt_empresa.email}</p>

                    <p><strong>📞 Telefone Principal:</strong><br />
                        {contt_empresa.tel_principal.tel} - {contt_empresa.tel_principal.nome}
                    </p>

                    <p><strong>📞 Telefone Secundário:</strong><br />
                        {contt_empresa.tel_secundario.tel} - {contt_empresa.tel_secundario.nome}
                    </p>

                    <div className={css.mapa}>
                        <h3>Mapa</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.567021498986!2d-48.510006!3d-25.516335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce47d08a1f4c9%3A0x8f5f5b0b1e7c9c09!2sParanagu%C3%A1%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v0000000000000"
                            width="100%" height="250" style={{ border: '0' }} allowFullScreen loading="lazy">
                        </iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}