import logoPremold from "../assets/premold-logo.png"
import "../styles/components/navbar.styles.css"
import { scrollToSection } from "../../lib/scrollToSection"
import { Link } from "react-router-dom"

export const Navbar = () => {
    const LogoMenu = () => (
        <Link to="/">
            <img src={logoPremold} alt="Logo Premold" height={60} />
        </Link>
    )
    
    const BtnOrchament = () => (
        <a onClick={(e) => scrollToSection(e)} href="#contact" className="nav-link"> Solicitar Orçamento </a>
    )

    const DesktopMenu = () => {
        return (
            <div className="desktop-menu">
                <LogoMenu />
                <ul>
                    <li> <a onClick={(e) => scrollToSection(e)} href="#banner"> Home </a> </li>
                    <li> <a onClick={(e) => scrollToSection(e)} href="#our-services"> Serviços </a> </li>
                    <li> <a onClick={(e) => scrollToSection(e)} href="#our-projects"> Projetos </a> </li>
                    <li> <a onClick={(e) => scrollToSection(e)} href="#contact"> Contato </a> </li>
                </ul>
                <BtnOrchament />
            </div>
        )
    }

    const MobileMenu = () => {
        return (
            <div className="mobile-menu">
                <label className="hamburger" >
                    <input type="checkbox" className="input-checkbox-menu" />
                    <svg viewBox="0 0 32 32">
                        <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path class="line" d="M7 16 27 16"></path>
                    </svg>
                    <ul className="menu-mobile">
                        <li> <a onClick={(e) => scrollToSection(e)} href="#banner"> Home </a> </li>
                        <li> <a onClick={(e) => scrollToSection(e)} href="#our-services"> Serviços </a> </li>
                        <li> <a onClick={(e) => scrollToSection(e)} href="#our-projects"> Projetos </a> </li>
                        <li> <a onClick={(e) => scrollToSection(e)} href="#contact"> Contato </a> </li>
                        <BtnOrchament />
                    </ul>
                </label>
                <LogoMenu />
            </div>
        )
    }

    return (
        <nav>
            <DesktopMenu />
            <MobileMenu />
        </nav>
    )
}