import "../styles/components/form-contact.styles.css"
import { useState } from "react"
import { fetchSendEmail } from "../../lib/fetchSendEmail"

export const FormContact = () => {
    const [textBtn, setTextBtn] = useState("Enviar")
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
    })

    function handleInputChange(e) {
        let { name, value } = e.target
        setFormData((prevClass) => ({
            ...prevClass, [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setTextBtn("Enviando...")
        try {
            let response = await fetchSendEmail(formData);
            if (response === "200") {
                setTextBtn("Mensagem Enviada!")
                ChangeTextBtnOnTime("Enviar")
                cleamForm()
            } else {
                setTextBtn("Erro, tente novamente")
                ChangeTextBtnOnTime("Enviar")
            }
        } catch (error) {
            setTextBtn("Erro, tente novamente")
            ChangeTextBtnOnTime("Enviar")
        }
    }

    function ChangeTextBtnOnTime(text) {
        setTimeout(() => {
            setTextBtn(text)
        }, 5000)
    }
    
    function cleamForm() {
        setFormData({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Entre em Contato</h2>
                <p>E vamos construir Juntos!</p>
            </div>
            <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                onChange={(e) => handleInputChange(e)}
                value={formData.name}
            />
            <input
                type="tel"
                placeholder="Seu Telefone (com DDD)"
                name="phone"
                onChange={(e) => handleInputChange(e)}
                value={formData.phone}
            />
            <input
                type="email"
                name="email"
                placeholder="Seu Email"
                onChange={(e) => handleInputChange(e)}
                value={formData.email}
            />
            <input
                type="text"
                name="subject"
                placeholder="Assunto"
                onChange={(e) => handleInputChange(e)}
                value={formData.subject}
            />
            <textarea
                name="message"
                placeholder="Sua Menssagem"
                onChange={(e) => handleInputChange(e)}
                value={formData.message}
            />
            <button type="submit">
                {textBtn}
            </button>
        </form>
    )
}