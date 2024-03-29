import { FAQ } from "../components/FAQ"
import { FormContact } from "../components/FormContact"
import "../styles/sections/contact.styles.css"

export const ContactSection = () => {

    return (
        <section id="contact" className="contact-section">
            <FormContact />
            <FAQ />
        </section>
    )
}