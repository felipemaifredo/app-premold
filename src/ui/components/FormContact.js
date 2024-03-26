import "../styles/components/form-contact.styles.css"
import { useState } from 'react'
const linkToFetch = 'https://formsubmit.co/felipemaifredo@gmail.com'

export const FormContact = () => {
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

    function handleSubmit(e) {
        e.preventDefault()
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
                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" placeholder="Seu Telefone (com DDD)"
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
                Enviar
            </button>
        </form>
    )
}