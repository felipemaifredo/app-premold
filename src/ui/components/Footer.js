import "../styles/components/footer.styles.css"
import logo1 from "../assets/premold-logo-v2.png"
import { FaFacebook } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { FaLinkedin } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import { FaPhone } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { scrollToSection } from "../../lib/scrollToSection"

export const Footer = () => {
    return (
        <footer>
            <div className="left-side">
                <div className="img-container">
                    <img src={logo1} alt="Logo Premold" />
                </div>
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
                <div className="social-container">
                    <a href="google.com">
                        <FaFacebook />
                    </a>
                    <a href="google.com">
                        <RiInstagramFill />
                    </a>
                    <a href="google.com">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className="center-side">
                <p className="title">Links Importantes</p>
                <a onClick={(e) => scrollToSection(e)} href="#banner"> Inicio </a>
                <a onClick={(e) => scrollToSection(e)} href="#our-services" > Serviços </a>
                <a onClick={(e) => scrollToSection(e)} href="#our-projects" > Projetos </a>
                <a href="google.com"> Quem Somos </a>
                <a onClick={(e) => scrollToSection(e)} href="#contact"> Contato </a>
            </div>
            <div className="right-side">
                <a 
                    href="tel:+55123456789"
                    className="icon-container"
                    target="_blanck"
                >
                    <span className="icon-box">
                        <FaWhatsapp />
                    </span>
                    <div className="data-box">
                        <p>Telefone</p>
                        <p>(28) 3511-4065</p>
                    </div>
                </a>
                <a 
                    href="https://api.whatsapp.com/send?phone=5528999519306"
                    className="icon-container"
                    target="_blanck"
                >
                    <span className="icon-box">
                        <FaPhone />
                    </span>
                    <div className="data-box">
                        <p>WhatsApp</p>
                        <p>(28) 99951-9306</p>
                    </div>
                </a>
                <a 
                    href="mailto:exemplo@email.com" 
                    className="icon-container"
                    target="_blanck"
                >
                    <span className="icon-box">
                        <MdEmail />
                    </span>
                    <div className="data-box">
                        <p>Email</p>
                        <p>Contato@premold.com.br</p>
                    </div>
                </a>
            </div>
        </footer>
    )
}